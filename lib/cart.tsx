'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type CartLine = {
  id: string; // unique key: slug, or `slug::option`
  slug: string;
  name: string;
  image: string;
  price: number;
  unit: string;
  variant?: string | null;
};

type Entry = { line: CartLine; qty: number };

type CartState = {
  entries: Entry[];
  isOpen: boolean;
  count: number;
  subtotal: number;
  shipping: number;
  total: number;
  add: (line: CartLine, qty?: number) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
};

const CartContext = createContext<CartState | null>(null);
const STORAGE_KEY = 'ss-cart-v1';
const FREE_SHIP_THRESHOLD = 100;
const FLAT_SHIPPING = 4.95;

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Map<string, Entry>>(new Map());
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load persisted cart once on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const arr: Entry[] = JSON.parse(raw);
        const map = new Map<string, Entry>();
        arr.forEach((e) => {
          if (e?.line?.id) map.set(e.line.id, e);
        });
        setItems(map);
      }
    } catch {
      /* ignore malformed storage */
    }
    setHydrated(true);
  }, []);

  // Persist whenever the cart changes (after hydration).
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...items.values()]));
    } catch {
      /* storage may be unavailable */
    }
  }, [items, hydrated]);

  const add = useCallback((line: CartLine, qty = 1) => {
    setItems((prev) => {
      const next = new Map(prev);
      const existing = next.get(line.id);
      next.set(line.id, { line, qty: (existing?.qty || 0) + qty });
      return next;
    });
    setIsOpen(true);
  }, []);

  const inc = useCallback((id: string) => {
    setItems((prev) => {
      const next = new Map(prev);
      const e = next.get(id);
      if (e) next.set(id, { ...e, qty: e.qty + 1 });
      return next;
    });
  }, []);

  const dec = useCallback((id: string) => {
    setItems((prev) => {
      const next = new Map(prev);
      const e = next.get(id);
      if (!e) return next;
      if (e.qty <= 1) next.delete(id);
      else next.set(id, { ...e, qty: e.qty - 1 });
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
    const entries = [...items.values()];
    const count = entries.reduce((s, e) => s + e.qty, 0);
    const subtotal = entries.reduce((s, e) => s + e.line.price * e.qty, 0);
    const shipping = subtotal === 0 || subtotal >= FREE_SHIP_THRESHOLD ? 0 : FLAT_SHIPPING;
    return {
      entries,
      isOpen,
      count,
      subtotal,
      shipping,
      total: subtotal + shipping,
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
