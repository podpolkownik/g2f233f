import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, BarChart2, CheckCircle2, ExternalLink } from 'lucide-react';

export const Solution = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Guaranteed Security",
      description: "Modern protocols for securing your funds and data.",
    },
    {
      icon: TrendingUp,
      title: "Profit Growth",
      description: "Support for profitable deals to continuously increase your capital.",
    },
    {
      icon: BarChart2,
      title: "Proven Effectiveness",
      description: "Stable earnings on a platform with experienced analysts.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">
            <span className="whitespace-nowrap">Solution:</span>{' '}
            <a 
              href="https://melonisx.pro/Gh9dwvJY?fbclid=%7Bfbclid%7D&utm_campaign=%7B%7Bcampaign.name%7D%7D&utm_source=%7B%7Bsite_source_name%7D%7D&utm_placement=%7B%7Bplacement%7D%7D&campaign_id=%7B%7Bcampaign.id%7D%7D&adset_id=%7B%7Badset.id%7D%7D&ad_id=%7B%7Bad.id%7D%7D&adset_name=%7B%7Badset.name%7D%7D&ad_name=%7B%7Bad.name%7D%7D" 
              className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-2 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coin Lem
              <ExternalLink className="w-4 h-4 text-blue-600" />
            </a>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A platform that opens the path to financial independence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-blue-50 p-8 rounded-xl text-center"
            >
              <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="p-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                How does{' '}
                <a 
                  href="https://melonisx.pro/Gh9dwvJY?fbclid=%7Bfbclid%7D&utm_campaign=%7B%7Bcampaign.name%7D%7D&utm_source=%7B%7Bsite_source_name%7D%7D&utm_placement=%7B%7Bplacement%7D%7D&campaign_id=%7B%7Bcampaign.id%7D%7D&adset_id=%7B%7Badset.id%7D%7D&ad_id=%7B%7Bad.id%7D%7D&adset_name=%7B%7Badset.name%7D%7D&ad_name=%7B%7Bad.name%7D%7D"
                  className="underline text-white hover:text-white inline-flex items-center gap-2 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coin Lem
                  <ExternalLink className="w-4 h-4 text-white" />
                </a> work?
              </h3>
              <ul className="space-y-4">
                {[
                  "In-depth analysis and proven investment strategies",
                  "Effective algorithms to maximize profit",
                  "Ongoing support from a team of professionals",
                  "Easy access to profitable trading opportunities",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-6 h-6 text-blue-300 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-full min-h-[400px]">
              <img
                src="https://sun9-4.userapi.com/impg/ZD3nm0lOCjKi6Uja8AhRmG9Dj_wUtNg49w4hTQ/EMnffmSzsSM.jpg?size=1000x720&quality=96&sign=e5b5cd776f9cb35fddd1c6520670eab8&type=album"
                alt="Coin Lem in action"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
