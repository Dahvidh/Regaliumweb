'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function FeaturesSection() {
  const features = [
    { 
      img: '/group291.png',
      title: 'Incentive Mechanism',
      desc: 'Users earn Yomcoin for transactions',
      titleColor: 'text-green-400',
      bgImg: '/group291.png'
    },
    { 
      img: '/intersect.png',
      title: 'Low Transaction Fees',
      desc: 'Affordable payments for everyone',
      titleColor: 'text-green-300',
      bgImg: '/Intersect2.png'
    },
    { 
      img: '/stopwatch.png',
      title: 'Fast Transactions',
      desc: 'Near-instant transactions powered by blockchain',
      titleColor: 'text-green-500',
      bgImg: '/Intersect5.png'
    },
    { 
      img: '/secure.png',
      title: 'Enhanced Security',
      desc: 'Top-notch security with encryption',
      titleColor: 'text-blue-400',
      bgImg: '/Intersect5.png'
    },
    { 
      img: '/scalability.png',
      title: 'Decentralized Platform',
      desc: 'Ensures transparency and eliminates centralized control',
      titleColor: 'text-yellow-300',
      bgImg: '/Intersect4.png'
    }
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="relative py-16 bg-black text-white bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/bg.png')" }}>
      <div className="absolute inset-0 pointer-events-none">
        <img src="/geo2.png" alt="geo2" className="absolute bottom-24 right-16 w-32 opacity-30 animate-spin-slow" />
      </div>

      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="underline decoration-orange-500">Explore Our Features</span>
        </h2>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-10">
        <Slider {...settings}>
          {features.map((item, index) => (
            <div key={index} className="px-2">
              <div
                className="rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-[350px] bg-cover bg-bottom"
                style={{ backgroundImage: `url(${item.bgImg})` }}
              >
                <img src={item.img} alt={item.title} className="w-24 h-24 mb-4" />
                <h3 className={`${item.titleColor} text-xl font-semibold mb-2`}>{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
