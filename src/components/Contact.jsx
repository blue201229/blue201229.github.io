import React from 'react'
import { FaGithub, FaDiscord, FaTelegram, FaCode } from 'react-icons/fa'

const Contact = () => {
  const contactMethods = [
    {
      name: 'GitHub Profile',
      value: 'blue201229',
      link: 'https://github.com/blue201229',
      icon: <FaGithub />,
      color: 'bronze'
    },
    {
      name: 'DEV.to',
      value: 'rainer_montalbo_2026',
      link: 'https://dev.to/rainer_montalbo_2026',
      icon: <FaCode />,
      color: 'silver'
    },
    {
      name: 'Discord',
      value: 'blue_201229',
      link: 'https://discord.com/users/blue_201229',
      icon: <FaDiscord />,
      color: 'silver'
    },
    {
      name: 'Telegram',
      value: '@fan_1229',
      link: 'https://t.me/fan_1229',
      icon: <FaTelegram />,
      color: 'gold'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      bronze: {
        border: 'border-metal-bronze',
        text: 'text-metal-bronze',
        bg: 'bg-metal-bronze/10',
        hover: 'hover:border-metal-bronze'
      },
      silver: {
        border: 'border-metal-silver',
        text: 'text-metal-silver',
        bg: 'bg-metal-silver/5',
        hover: 'hover:border-metal-silver'
      },
      gold: {
        border: 'border-metal-gold',
        text: 'text-metal-gold',
        bg: 'bg-metal-gold/5',
        hover: 'hover:border-metal-gold'
      },
      copper: {
        border: 'border-metal-copper',
        text: 'text-metal-copper',
        bg: 'bg-metal-copper/5',
        hover: 'hover:border-metal-copper'
      }
    }
    return colors[color] || colors.silver
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 text-center">
          <span className="text-metal-gold text-metal-glow">GET IN</span>
          <span className="text-slate-300"> TOUCH</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const colors = getColorClasses(method.color)
            const Component = method.link ? 'a' : 'div'
            const props = method.link
              ? { href: method.link, target: '_blank', rel: 'noopener noreferrer' }
              : {}

            return (
              <Component
                key={index}
                {...props}
                className={`group bg-black/40 border ${colors.border} p-6 rounded-lg backdrop-blur-sm transition-all duration-300 ${method.link ? colors.hover + ' cursor-pointer' : ''} text-center`}
              >
                <div className={`inline-block ${colors.bg} ${colors.border} border p-4 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className={`${colors.text} text-3xl`}>{method.icon}</span>
                </div>
                <h3 className={`text-lg font-bold ${colors.text} mb-2`}>
                  {method.name}
                </h3>
                <p className="text-metal-silver/80 text-sm break-all">
                  {method.value}
                </p>
              </Component>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-black/40 border border-metal-silver p-8 rounded-lg backdrop-blur-sm">
            <p className="text-metal-silver text-lg mb-4">
              Open to various opportunities in:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Game Development', 'Rust Development', 'Web3 Development', 'Blockchain Building', 'AI Engineering'].map((role, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-black/60 border border-metal-bronze text-metal-bronze rounded-lg hover:border-metal-silver hover:text-metal-silver transition-all duration-300"
                >
                  {role}
                </span>
              ))}
            </div>
            <p className="text-metal-copper mt-6 font-semibold text-lg">
              Always ready to learn new skills and take on exciting challenges!
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center text-metal-silver/60 text-sm">
        <p className="mb-2">© 2025 Rainer Moltabo. Built with React & Vite.</p>
        <div className="flex justify-center gap-4 items-center flex-wrap">
          <a
            href="https://github.com/blue201229"
            target="_blank"
            rel="noopener noreferrer"
            className="text-metal-silver/60 hover:text-metal-bronze transition-colors flex items-center gap-1"
          >
            <FaGithub className="text-sm" />
            <span>GitHub Profile</span>
          </a>
          <span className="text-metal-silver/40">•</span>
          <a
            href="https://dev.to/rainer_montalbo_2026"
            target="_blank"
            rel="noopener noreferrer"
            className="text-metal-silver/60 hover:text-metal-bronze transition-colors flex items-center gap-1"
          >
            <FaCode className="text-sm" />
            <span>DEV.to Profile</span>
          </a>
        </div>
      </footer>
    </section>
  )
}

export default Contact
