import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { createShopifyCheckout } from '../services/shopify';

export default function CartDrawer({ onNavigateShop }) {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 1999;
  const progressPercent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const amountNeeded = FREE_SHIPPING_THRESHOLD - subtotal;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'GREENTRIBE10') {
      setAppliedDiscount(subtotal * 0.1);
      alert("Promo code 'GREENTRIBE10' applied! 10% discount subtracted.");
    } else {
      alert("Invalid promo code. Try 'GREENTRIBE10' for 10% off!");
    }
  };

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    try {
      const checkoutUrl = await createShopifyCheckout(cart);
      if (checkoutUrl) {
        window.open(checkoutUrl, '_blank');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsCheckingOut(false);
    }
  };

  const finalTotal = Math.max(0, subtotal - appliedDiscount);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fadeIn" 
        onClick={closeCart} 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-brand-beige border-l border-brand-border-light shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 bg-white border-b border-brand-border-light flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-brand-green" />
              <h2 className="brand-font-serif text-lg font-bold text-brand-charcoal">Your Cart</h2>
              <span className="bg-brand-light-green text-brand-green text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button 
              onClick={closeCart} 
              className="p-1 rounded-full text-brand-gray hover:text-brand-charcoal hover:bg-black/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-emerald-50 px-5 py-3 border-b border-emerald-100/60">
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-900 mb-1.5">
              <Truck className="w-4 h-4 text-emerald-700" />
              {progressPercent >= 100 ? (
                <span className="font-bold text-emerald-800">🎉 You've qualified for FREE Nationwide Delivery!</span>
              ) : (
                <span>Add <strong className="text-emerald-800">₹{amountNeeded.toLocaleString('en-IN')}.00</strong> more to unlock Free Shipping</span>
              )}
            </div>
            <div className="w-full bg-emerald-200/80 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-brand-green h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-brand-green">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="brand-font-serif text-lg font-semibold text-brand-charcoal">Your cart is empty</h3>
                <p className="text-xs text-brand-gray max-w-xs">
                  Discover our sustainable handcrafted cane & bamboo collections and bring nature into your home.
                </p>
                <button
                  onClick={() => {
                    closeCart();
                    onNavigateShop();
                  }}
                  className="bg-brand-green hover:bg-brand-green-hover text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors"
                >
                  Explore Shop Catalog
                </button>
              </div>
            ) : (
              cart.map(({ product, quantity }) => (
                <div key={product.id} className="bg-white p-3.5 rounded-xl border border-brand-border-light/80 shadow-xs flex gap-3.5 items-center">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-16 h-16 rounded-lg object-cover bg-brand-beige-dark/20 shrink-0" 
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-semibold text-brand-charcoal truncate">{product.title}</h4>
                    <span className="text-[10px] text-brand-gray">{product.material}</span>
                    <div className="text-xs font-bold text-brand-green mt-1">
                      ₹{product.price.toLocaleString('en-IN')}.00
                    </div>
                  </div>

                  {/* Quantity selector */}
                  <div className="flex items-center gap-1 bg-brand-beige rounded-lg border border-brand-border-light px-1 py-0.5">
                    <button 
                      onClick={() => updateQuantity(product.id, -1)} 
                      className="p-1 text-brand-charcoal hover:text-brand-green"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold px-1 min-w-[16px] text-center">{quantity}</span>
                    <button 
                      onClick={() => updateQuantity(product.id, 1)} 
                      className="p-1 text-brand-charcoal hover:text-brand-green"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Delete button */}
                  <button 
                    onClick={() => removeFromCart(product.id)}
                    className="p-1.5 text-gray-400 hover:text-rose-600 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Panel */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-brand-border-light space-y-4">
              
              {/* Promo code */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (Try GREENTRIBE10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-brand-beige border border-brand-border-light rounded-lg px-3 py-1.5 text-xs text-brand-charcoal focus:outline-none focus:ring-1 focus:ring-brand-green uppercase"
                />
                <button 
                  type="submit" 
                  className="bg-brand-beige-dark hover:bg-brand-border-light text-brand-charcoal text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                >
                  Apply
                </button>
              </form>

              {/* Price summary */}
              <div className="space-y-1.5 text-xs text-brand-gray border-t border-dashed border-brand-border-light pt-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-brand-charcoal">₹{subtotal.toLocaleString('en-IN')}.00</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Discount (10%)</span>
                    <span>-₹{appliedDiscount.toLocaleString('en-IN')}.00</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-medium text-emerald-700">
                    {subtotal >= FREE_SHIPPING_THRESHOLD ? 'FREE' : '₹99.00'}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-brand-charcoal border-t border-brand-border-light pt-2">
                  <span>Total</span>
                  <span className="text-brand-green text-base">₹{finalTotal.toLocaleString('en-IN')}.00</span>
                </div>
                <p className="text-[10px] text-brand-gray text-right">Taxes included. Calculated at checkout.</p>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                {isCheckingOut ? (
                  <span>Connecting Shopify Checkout...</span>
                ) : (
                  <>
                    <span>PROCEED TO SHOPIFY CHECKOUT</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-brand-gray pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Encrypted 256-Bit SSL Checkout • Shopify Storefront API Ready</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
