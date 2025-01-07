import { ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-zinc-900 to-zinc-950 text-zinc-300 border-t border-gray-600">
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand & CTA Section - Now Wider */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold text-white mb-4">
                {`Mana'o Pili`}
              </h2>
              <p className="text-lg text-zinc-400 mb-8 max-w-lg">
                Transform your business with data-driven insights and unlock the full potential of your organization through strategic analytics.
              </p>
              <a 
                href="/survey" 
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full font-heading transition-all duration-200 group shadow-lg hover:shadow-blue-500/25"
              >
                Take Our Survey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Navigation & Social Links - Better Spacing */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 lg:pl-12">
                {/* Company Links */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                  <ul className="space-y-3">
                    {['About', 'Services', 'Survey'].map((item) => (
                      <li key={item}>
                        <a 
                          href={`/${item.toLowerCase()}`}
                          className="text-base text-zinc-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal Links */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                  <ul className="space-y-3">
                    {['Privacy', 'Terms', 'Security'].map((item) => (
                      <li key={item}>
                        <a 
                          href={`/${item.toLowerCase()}`}
                          className="text-base text-zinc-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                  <div className="flex items-center gap-2 space-y-0">
                    {[
                      { Icon: Facebook, href: '#' },
                      { Icon: Twitter,href: '#' },
                      { Icon: Instagram, href: '#' },
                      { Icon: Linkedin, href: '#' }
                    ].map(({ Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        className="text-base text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-3 group"
                      >
                        <Icon className="h-5 w-5 group-hover:text-blue-400 transition-colors" />
                        <span>{label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-zinc-800">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
              <p className="text-sm text-zinc-500">
                &copy; {`2025 Mana'o Pili. All rights reserved.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}