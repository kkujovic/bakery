import "./bakery.css";
import BakeryScripts from "@/components/BakeryScripts";

export default function Home() {
  return (
    <>
      <BakeryScripts />

      {/* NAV */}
      <nav id="nav">
        <div className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand_assets/logo_bakery.png" alt="Artisan's Crust & Co." />
        </div>
        <div className="nav-bottom">
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#categories">Menu</a></li>
            <li><a href="#process">Catering</a></li>
          </ul>
          <a href="mailto:hello@artisanscrust.co.uk" className="nav-cta">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <p className="hero-eyebrow">Hand-Baked Since 1908</p>
          <h1 className="hero-headline">
            Where Every<br />Bite Tells<br />a Story.
          </h1>
          <p className="hero-body">
            Crafted from local grain, slow-fermented and baked in wood-fired ovens — every loaf
            carries more than a century of dedication in each crust.
          </p>
          <div className="hero-actions">
            <a href="#categories" className="btn-primary">Explore the Menu</a>
            <div className="hero-stat">
              <span className="num">4.7</span>
              <div>
                <div className="stars">★★★★★</div>
                <div className="lbl">Customer Rating</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card fade-up">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="testimonial-avatar"
              src="https://placehold.co/72x72/D4B896/6B3D2E?text=S"
              alt="Customer"
            />
            <div className="testimonial-body">
              <p className="testimonial-quote">
                &ldquo;The sourdough is unlike anything I&apos;ve tasted — rich, complex, and
                impossibly good.&rdquo;
              </p>
              <p className="testimonial-meta">
                <strong>Sarah M.</strong> · Loyal customer since 2011
              </p>
            </div>
          </div>
        </div>
        <div className="hero-right">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero-img"
            src="https://placehold.co/900x900/C49A5A/3D1F10?text=Artisan+Bread"
            alt="Fresh artisan bread"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-header fade-up">
          <div className="section-label">Who We Are</div>
          <h2 className="section-title">About Us</h2>
        </div>
        <div className="about-cols">
          <div className="fade-up">
            <div className="about-col-title">Our Story</div>
            <p className="about-col-text">
              Founded in 1908 by Emilio Crust, our bakery began as a single wood-fired oven in a
              cobblestone alley. What started as a neighborhood ritual — the smell of fresh bread
              drifting through morning air — has grown into a living tradition passed hand to hand
              across three generations. We&apos;ve never chased trends. Long fermentation, local grain,
              open fire. The same principles that shaped Emilio&apos;s first loaf shape every loaf we bake
              today.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="about-col-image"
              src="/brand_assets/bakery_owners.png"
              alt="The bakery owners"
            />
          </div>
          <div className="fade-up">
            <div className="about-col-title">Our Mission</div>
            <p className="about-col-text">
              We believe bread is more than sustenance — it is memory, community, and craft bound
              into one humble loaf. Our mission is to bake with integrity: sourcing grain from within
              50 miles, using no additives, and giving every loaf the time it deserves. In a world
              that hurries, we slow down deliberately. Patience is our only secret ingredient. Every
              morning our bakers arrive before dawn, their hands shaped by years of practice into
              something close to instinct.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="about-col-image"
              src="https://placehold.co/700x467/D4B896/6B3D2E?text=Our+Bakery"
              alt="Our bakery interior"
            />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories" id="categories">
        <div className="categories-header fade-up">
          <div className="section-label">What We Bake</div>
          <h2 className="section-title">Explore Our Categories</h2>
        </div>
        <div className="categories-grid">
          {[
            { src: "https://placehold.co/400x267/C49A5A/3D1F10?text=Artisan+Breads", alt: "Artisan Breads", name: "Artisan Breads", desc: "Sourdough, rye, ciabatta and more — all naturally leavened." },
            { src: "https://placehold.co/400x267/B8864A/3D1F10?text=Fresh+Pastries", alt: "Fresh Pastries", name: "Fresh Pastries", desc: "Croissants, pain au chocolat and brioche, baked fresh each morning." },
            { src: "https://placehold.co/400x267/D4A96A/3D1F10?text=Cakes+%26+Tarts", alt: "Cakes & Tarts", name: "Cakes & Tarts", desc: "Seasonal fruit tarts, layered cakes and celebratory bakes." },
            { src: "https://placehold.co/400x267/8B5E3C/F5E6C8?text=Savoury+Bakes", alt: "Savoury Bakes", name: "Savoury Bakes", desc: "Focaccia, cheese scrolls and herb-filled specialties." },
          ].map((cat) => (
            <div key={cat.name} className="category-card fade-up" tabIndex={0}>
              <div className="category-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cat.src} alt={cat.alt} />
              </div>
              <div className="category-info">
                <div className="category-name">{cat.name}</div>
                <div className="category-desc">{cat.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" id="process">
        <div className="process-header fade-up">
          <div className="section-label">How We Bake</div>
          <h2 className="section-title">Explore Our Process</h2>
        </div>
        <div className="process-steps">
          {[
            { n: "1", title: "Source Local Grain", text: "We work with mills within 50 miles, using stoneground, seasonal, fully traceable flour." },
            { n: "2", title: "Slow Fermentation", text: "36–72 hours of natural fermentation develops complex flavour and improves digestibility." },
            { n: "3", title: "Hand Shaping", text: "Every loaf is scored and shaped by the same baker, from first fold to final form." },
            { n: "4", title: "Wood-Fired Baking", text: "Oak and beech, heated to temperatures no electric oven can match — giving each crust its character." },
          ].map((step) => (
            <div key={step.n} className="process-step fade-up">
              <div className="step-num">{step.n}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand_assets/logo_bakery.png" alt="Artisan's Crust & Co." />
          <p className="footer-tagline">Hand-baked with care since 1908. Some things are worth doing slowly.</p>
        </div>
        <div className="footer-col">
          <h4>Bakery</h4>
          <ul>
            <li><a href="#">Daily Loaves</a></li>
            <li><a href="#">Pastries</a></li>
            <li><a href="#">Seasonal</a></li>
            <li><a href="#">Wholesale</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>About</h4>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">The Craft</a></li>
            <li><a href="#">Our Bakers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Artisan&apos;s Crust &amp; Co. All rights reserved.</p>
          <div className="footer-divider">
            <span>Hand-Baked Since 1908</span>
          </div>
          <p>Privacy · Terms</p>
        </div>
      </footer>
    </>
  );
}
