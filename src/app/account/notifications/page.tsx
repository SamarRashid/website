import Link from "next/link";

const NOTIFICATIONS = [
  { id: 1, title: "Order Shipped! 📦", text: "Your order #HAY-28451 has been shipped via TCS. Track now.", time: "2 hours ago", read: false },
  { id: 2, title: "Order Delivered 🎉", text: "Your order #HAY-19832 has been delivered. Enjoy your purchase!", time: "3 days ago", read: false },
  { id: 3, title: "Flash Sale — 40% Off! 💸", text: "Limited time: up to 40% off on selected abayas and dresses.", time: "5 days ago", read: true },
  { id: 4, title: "Order Confirmed ✅", text: "Your order #HAY-05671 has been confirmed. We are processing it now.", time: "1 week ago", read: true },
  { id: 5, title: "New Promo Code 🏷️", text: "Use code SAVE15 to get 15% off your next order. Valid for 7 days.", time: "1 week ago", read: true },
  { id: 6, title: "Wishlist Item on Sale! 💖", text: "A product in your wishlist is now on sale. Grab it before it sells out!", time: "2 weeks ago", read: true },
];

export default function NotificationsPage() {
  return (
    <div className="w-full bg-brand-bg min-h-screen py-10">
      <div className="mx-auto max-w-4xl px-6">
        
        <div className="flex justify-between items-end mb-8 border-b border-black/5 pb-4">
          <h1 className="text-3xl font-serif text-brand-maroon">Notifications</h1>
          <button className="text-[10px] uppercase font-bold tracking-widest text-brand-gold hover:underline">
            Mark all as read
          </button>
        </div>

        <div className="space-y-4">
          {NOTIFICATIONS.map((notif) => (
            <div 
              key={notif.id} 
              className={`p-5 rounded-xl border ${notif.read ? 'bg-white border-black/5' : 'bg-[#FEFDF9] border-brand-gold/30 shadow-sm'} flex gap-4 transition-colors hover:border-brand-gold/50 cursor-pointer`}
            >
              <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center flex-shrink-0 text-xl border border-black/5">
                {notif.title.split(' ').pop()} 
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-sm font-bold text-brand-maroon flex items-center gap-2">
                    {notif.title.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|\p{Emoji}/gu, '').trim()}
                    {!notif.read && <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>}
                  </h3>
                  <span className="text-[10px] text-brand-text-light whitespace-nowrap ml-4">{notif.time}</span>
                </div>
                <p className="text-xs text-brand-text leading-relaxed">
                  {notif.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/account" className="inline-block border border-black/10 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/5 transition-colors">
            Back to Account
          </Link>
        </div>

      </div>
    </div>
  );
}
