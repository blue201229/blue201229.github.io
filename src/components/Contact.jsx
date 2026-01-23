import React from 'react'
import { FaGithub, FaDiscord, FaTelegram, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const contactMethods = [
    {
      name: 'GitHub',
      value: 'blue201229',
      link: 'https://github.com/blue201229',
      icon: <FaGithub />,
      color: 'pink'
    },
    {
      name: 'Discord',
      value: 'blue_201229',
      link: 'https://discord.com/users/blue_201229',
      icon: <FaDiscord />,
      color: 'cyan'
    },
    {
      name: 'Telegram',
      value: '@fan_1229',
      link: 'https://t.me/fan_1229',
      icon: <FaTelegram />,
      color: 'purple'
    },
    {
      name: 'Location',
      value: 'Denver, Colorado',
      link: null,
      icon: <FaMapMarkerAlt />,
      color: 'green'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      pink: {
        border: 'border-cyber-pink',
        text: 'text-cyber-pink',
        bg: 'bg-cyber-pink/10',
        hover: 'hover:border-cyber-pink'
      },
      cyan: {
        border: 'border-cyber-cyan',
        text: 'text-cyber-cyan',
        bg: 'bg-cyber-cyan/5',
        hover: 'hover:border-cyber-cyan'
      },
      purple: {
        border: 'border-cyber-purple',
        text: 'text-cyber-purple',
        bg: 'bg-cyber-purple/5',
        hover: 'hover:border-cyber-purple'
      },
      green: {
        border: 'border-cyber-green',
        text: 'text-cyber-green',
        bg: 'bg-cyber-green/5',
        hover: 'hover:border-cyber-green'
      }
    }
    return colors[color] || colors.cyan
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 text-center">
          <span className="text-cyber-green text-cyber-glow">GET IN</span>
          <span className="text-cyber-pink text-cyber-glow"> TOUCH</span>
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
                <p className="text-cyber-cyan/80 text-sm break-all">
                  {method.value}
                </p>
              </Component>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-black/40 border border-cyber-cyan p-8 rounded-lg backdrop-blur-sm">
            <p className="text-cyber-cyan text-lg mb-4">
              Open to various opportunities in:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Game Development', 'Game Server Development', 'Web3 Development', 'Bot Development'].map((role, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-black/60 border border-cyber-pink text-cyber-pink rounded-lg hover:border-cyber-cyan hover:text-cyber-cyan transition-all duration-300"
                >
                  {role}
                </span>
              ))}
            </div>
            <p className="text-cyber-green mt-6 font-semibold text-lg">
              Always ready to learn new skills and take on exciting challenges!
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center text-cyber-cyan/60 text-sm">
        <p>© 2025 Rainer Moltabo. Built with React & Vite.</p>
      </footer>
    </section>
  )
}

export default Contact
