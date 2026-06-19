'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { PRODUCTS, type Product } from './products';

type CartState = {
  items: Map<string, number>;
  isOpen: boolean;
  count: number;
  subtotal: number;
  shipping: number;
  total: number;
  rows: Array<{ product: Product; qty: number; line: number }>;
  add: (id: string, qty?: number) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
};

const CartContext = createContext<CartState | null>(null);

const STORAGE_KEY = 'ss-cart';

function loadItems(): Map<string, number> {
  if (typeof window === 'undefined') return new Map();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Map();
    const obj = JSON.parse(raw) as Record<string, number>;
    return new Map(Object.entries(obj));
  } catch {
    return new Map();
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Map<string, number>>(new Map());
  const [isOpen, setIsOpen] = useState(false);

  // Hydrate from localStorage after mount (keeps SSR markup deterministic).
  useEffect(() => {
    setItems(loadItems());
  }, []);

  // Persist on every change.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Object.fromEntries(items)));
    } catch {
      /* ignore quota / privacy-mode errors */
    }
  }, [items]);

  const add = useCallback((id: string, qty = 1) => {
    setItems((prev) => {
      const next = new Map(prev);
      next.set(id, (next.get(id) || 0) + qty);
      return next;
    });
    setIsOpen(true);
  }, []);

  const inc = useCallback((id: string) => {
    setItems((prev) => {
      const next = new Map(prev);
      next.set(id, (next.get(id) || 0) + 1);
      return next;
    });
  }, []);

  const dec = useCallback((id: string) => {
    setItems((prev) => {
      const next = new Map(prev);
      const v = (next.get(id) || 0) - 1;
      if (v <= 0) next.delete(id); else next.set(id, v);
      return next;
    });
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => {
      const next = new Map(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const clear = useCallback(() => setItems(new Map()), []);

  const state = useMemo<CartState>(() => {
    const rows = [...items.entries()].flatMap(([id, qty]) => {
      const product = PRODUCTS.find((p) => p.id === id);
      return product ? [{ product, qty, line: product.price * qty }] : [];
    });
    const count = rows.reduce((s, r) => s + r.qty, 0);
    const subtotal = rows.reduce((s, r) => s + r.line, 0);
    const shipping = subtotal === 0 ? 0 : subtotal >= 100 ? 0 : 4.95;
    return {
      items,
      isOpen,
      count,
      subtotal,
      shipping,
      total: subtotal + shipping,
      rows,
      add,
      inc,
      dec,
      remove,
      clear,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    };
  }, [items, isOpen, add, inc, dec, remove, clear]);

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
}

export function useCart(): CartState {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
