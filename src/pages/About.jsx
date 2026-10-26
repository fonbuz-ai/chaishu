import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          {/* Avatar and name */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-3xl font-black text-white">
              國
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-2">國賓</h1>
            <p className="text-neon-purple font-medium">AI 拆书工坊 · 主理人</p>
          </div>

          {/* Info grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              { label: '所在地', value: '待填' },
              { label: '所属分舵', value: '待填' },
              { label: '拆书等级', value: '待填' },
              { label: '微信', value: '待填' },
            ].map(info => (
              <div key={info.label} className="p-4 rounded-xl bg-dark-card-hover/50 border border-dark-border">
                <div className="text-xs text-slate-500 mb-1">{info.label}</div>
                <div className="text-sm text-slate-200">{info.value}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-white mb-4">关于我</h2>
            <div className="space-y-3 text-sm text-slate-400 leading-relaxed">
              <p>
                这里填你的自我介绍：你是谁、在做什么、为什么想建这个拆书网站。
              </p>
              <p>
                这里填你的经历与资质：拆书等级、参与过的分舵、职业背景、正在做的项目。
              </p>
              <p className="flex flex-wrap gap-2 mt-4">
                {['标签一', '标签二', '标签三'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs">
                    {tag}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* 服务能力 */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-white mb-4">服务能力</h2>
            <div className="grid md:grid-cols-4 gap-3">
              {[
                { name: '培训', desc: 'AI 拆书工作坊、数字员工实操、二代传承教练' },
                { name: '咨询', desc: '企业内部创业辅导、科技成果转化、组织转型' },
                { name: '教练', desc: '二代教育传承、高管心智教练、AI 内创业加速' },
                { name: '投资', desc: 'AI 项目评估、科技创业辅导、资源对接' },
              ].map(s => (
                <div key={s.name} className="p-4 rounded-xl bg-dark-card-hover/50 border border-dark-border">
                  <div className="text-lg font-bold text-white mb-1">{s.name}</div>
                  <div className="text-xs text-slate-400">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 擅长领域 */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-white mb-4">擅长领域</h2>
            <div className="flex flex-wrap gap-2">
              {['待填领域一', '待填领域二', '待填领域三'].map((area, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-dark-card-hover/50 border border-dark-border text-sm text-slate-400">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 border border-neon-purple/20 text-center">
            <h3 className="text-lg font-bold text-white mb-2">联系我</h3>
            <p className="text-sm text-slate-400 mb-4">
              培训 · 咨询 · 教练 · 投资
            </p>
            <a
              href="mailto:your@email.com"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium text-sm hover:shadow-lg hover:shadow-neon-purple/25 transition-all"
            >
              联系我
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
