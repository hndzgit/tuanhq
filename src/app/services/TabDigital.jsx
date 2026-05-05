"use client";

import { motion } from 'framer-motion';
import { Network, Activity, ShieldCheck, Cog, CheckCircle2, Phone, Mail } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

import { useLanguage } from '@/context/LanguageContext';



const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const localDict = {
  vi: {
    title: "Dịch vụ Số hóa Quản lý",
    desc: "Ứng dụng Digital Twin và hệ thống tự động hóa quản lý vận hành dự án thông minh.",
    features: [
      { title: 'Hệ thống Quản lý Công việc', desc: 'Nền tảng quản lý công việc nội bộ doanh nghiệp với phân cấp tổ chức đa tầng. Hỗ trợ giao việc, theo dõi tiến độ.', tag: 'Quản lý Công việc' },
      { title: 'Dashboard Báo cáo — Phân tích Hiệu suất', desc: 'Giao diện báo cáo công việc trực quan với biểu đồ cột và tròn. Phân loại nhiệm vụ và xuất báo cáo.', tag: 'Dashboard & Báo cáo' },
      { title: 'Quản lý Nhân sự — Phân quyền', desc: 'Hệ thống quản lý tài khoản nhân sự với phân quyền chi tiết. Tích hợp bộ lọc phân cấp.', tag: 'Quản lý Nhân sự' },
      { title: 'Hệ thống Thông báo Thông minh', desc: 'Hệ thống thông báo tự động theo sự kiện tích hợp thời gian thực. Kết hợp Digital Twin để quản lý vận hành.', tag: 'Tự động hóa' }
    ],
    noteTitle: "Ghi chú về Dịch vụ",
    notes: [
      "Các giải pháp số hóa được thiết kế và triển khai theo đặc thù riêng.",
      "Hệ thống có thể tích hợp với phần mềm sẵn có (ERP, DMS, CRM)."
    ],
    ctaTitle: "Cần tư vấn giải pháp Số hóa Quản lý?",
    ctaDesc: "Liên hệ để nhận tư vấn và demo hệ thống phù hợp với quy trình vận hành của doanh nghiệp bạn",
    ctaCall: "Gọi ngay",
    ctaEmail: "Gửi Email"
  },
  en: {
    title: "Digital Management Services",
    desc: "Application of Digital Twin and smart automated project operation management systems.",
    features: [
      { title: 'Task Management System', desc: 'Internal enterprise task management platform with multi-level organizational hierarchy. Supports task assignment and progress tracking.', tag: 'Task Management' },
      { title: 'Reporting Dashboard — Performance Analysis', desc: 'Visual task reporting interface with bar and pie charts. Task categorization and report export.', tag: 'Dashboard & Reports' },
      { title: 'HR Management — Role-based Access', desc: 'HR account management system with detailed permissions. Integrated hierarchical filters.', tag: 'HR Management' },
      { title: 'Smart Notification System', desc: 'Automated event-based notification system integrated in real-time. Combined with Digital Twin for operation management.', tag: 'Automation' }
    ],
    noteTitle: "Service Notes",
    notes: [
      "Digital solutions are designed and implemented according to specific requirements.",
      "The system can integrate with existing software (ERP, DMS, CRM)."
    ],
    ctaTitle: "Need consultation for Digital Management solutions?",
    ctaDesc: "Contact us for consultation and a demo of a system suitable for your business operations",
    ctaCall: "Call Now",
    ctaEmail: "Send Email"
  },
  zh: {
    title: "数字化管理服务",
    desc: "数字孪生和智能自动化项目运营管理系统的应用。",
    features: [
      { title: '任务管理系统', desc: '具有多级组织层次的内部企业任务管理平台。支持任务分配和进度跟踪。', tag: '任务管理' },
      { title: '报告仪表板 — 绩效分析', desc: '带有柱状图和饼图的直观任务报告界面。任务分类和报告导出。', tag: '仪表板和报告' },
      { title: '人力资源管理 — 基于角色的访问', desc: '具有详细权限的人力资源账户管理系统。集成层次过滤器。', tag: '人力资源管理' },
      { title: '智能通知系统', desc: '实时集成的基于事件的自动通知系统。结合数字孪生进行运营管理。', tag: '自动化' }
    ],
    noteTitle: "服务注意事项",
    notes: [
      "数字解决方案是根据具体要求设计和实施的。",
      "该系统可以与现有软件（ERP、DMS、CRM）集成。"
    ],
    ctaTitle: "需要数字化管理解决方案咨询？",
    ctaDesc: "联系我们以获取咨询和适合您业务运营的系统演示",
    ctaCall: "立即致电",
    ctaEmail: "发送邮件"
  },
  ja: {
    title: "デジタル管理サービス",
    desc: "デジタルツインとスマートな自動化プロジェクト運用管理システムの適用。",
    features: [
      { title: 'タスク管理システム', desc: '多層的な組織階層を持つ社内タスク管理プラットフォーム。タスクの割り当てと進捗追跡をサポートします。', tag: 'タスク管理' },
      { title: 'レポートダッシュボード — パフォーマンス分析', desc: '棒グラフと円グラフを備えた視覚的なタスクレポートインターフェース。タスクの分類とレポートのエクスポート。', tag: 'ダッシュボードとレポート' },
      { title: '人事管理 — ロールベースのアクセス', desc: '詳細な権限を持つ人事アカウント管理システム。階層フィルターを統合。', tag: '人事管理' },
      { title: 'スマート通知システム', desc: 'リアルタイムに統合されたイベントベースの自動通知システム。運用管理のためのデジタルツインとの組み合わせ。', tag: '自動化' }
    ],
    noteTitle: "サービスノート",
    notes: [
      "デジタルソリューションは、特定の要件に従って設計および実装されます。",
      "システムは既存のソフトウェア（ERP、DMS、CRM）と統合できます。"
    ],
    ctaTitle: "デジタル管理ソリューションの相談が必要ですか？",
    ctaDesc: "お客様の業務運用に適したシステムの相談とデモについては、お問い合わせください",
    ctaCall: "今すぐ電話",
    ctaEmail: "メールを送信"
  }
};

export default function TabDigital() {
  const { lang } = useLanguage();
  const dict = localDict[lang] || localDict.vi;

  return (
    <div className="tab-wrapper">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{background: 'linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(15,52,96,0.9) 100%)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2.5rem 3rem', marginBottom: '2.5rem', color: 'white', position: 'relative', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)'}}>
        <div style={{position: 'absolute', top: '-30%', right: '-10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(237,28,36,0.2) 0%, transparent 70%)', pointerEvents: 'none'}}></div>
        <div style={{position: 'relative', zIndex: 1}}>
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 1 }, visible: { opacity: 1, transition: { staggerChildren: 0.04 } } }} style={{fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '0.5rem'}}>
            <Network size={28} color="var(--primary-green)" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '12px', marginTop: '-4px' }}/>
            {dict.title.split(' ').map((word, wIdx) => (
              <span key={wIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.25em' }}>
                {word.split('').map((char, cIdx) => (
                  <motion.span 
                    key={`${wIdx}-${cIdx}`} 
                    variants={{
                      hidden: { opacity: 0, y: 15, filter: 'blur(8px)' },
                      visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    style={{ display: 'inline-block' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h3>
          <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.7}}>{dict.desc}</p>
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem', marginBottom: '3.5rem'}}>
        {dict.features.map((item, i) => {
          const originalItem = [
            { color: 'var(--primary-red)', icon: <Activity size={40} color="var(--primary-red)"/> },
            { color: 'var(--primary-green)', icon: <ShieldCheck size={40} color="var(--primary-green)"/> },
            { color: 'var(--primary-red)', icon: <Cog size={40} color="var(--primary-red)"/> },
            { color: 'var(--primary-green)', icon: <Network size={40} color="var(--primary-green)"/> }
          ][i];
          return (
          <motion.div key={i} whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.3)", transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }} style={{background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', color: 'white'}}>
            <div style={{position: 'relative', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
               <div style={{width: '100%', height: '100%', background: `linear-gradient(135deg, rgba(26,26,46,0.5), ${originalItem.color.replace('var(', '').replace(')', '')}33)`, position: 'absolute', inset: 0}}></div>
               <div style={{position: 'relative', zIndex: 1, background: 'rgba(0,0,0,0.2)', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)'}}>
                 {originalItem.icon}
               </div>
              <span style={{position: 'absolute', top: '12px', left: '12px', background: originalItem.color, color: 'white', fontSize: '0.7rem', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', letterSpacing: '1px', textTransform: 'uppercase'}}>{item.tag}</span>
            </div>
            <div style={{padding: '1.5rem'}}>
              <div style={{fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, marginBottom: '0.6rem', color: 'white', lineHeight: 1.3}}>{item.title}</div>
              <div style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6}}>{item.desc}</div>
            </div>
          </motion.div>
        )})}
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', borderLeft: '4px solid var(--primary-green)', borderTop: '1px solid rgba(255,255,255,0.05)', borderRight: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '2rem', marginBottom: '3.5rem', color: 'white'}}>
        <div style={{fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: 'white', marginBottom: '1rem'}}>{dict.noteTitle}</div>
        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
          {dict.notes.map((note, idx) => (
            <li key={idx} style={{fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem', lineHeight: 1.6, display: 'flex', alignItems: 'flex-start', gap: '0.8rem'}}><CheckCircle2 size={16} style={{color: 'var(--primary-green)', marginTop: '2px', flexShrink: 0}}/><span>{note}</span></li>
          ))}
        </ul>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{textAlign: 'center', padding: '3rem', background: 'linear-gradient(135deg, rgba(26,26,46,0.9), rgba(15,52,96,0.9))', backdropFilter: 'blur(10px)', borderRadius: '16px', color: 'white', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)'}}>
        <p style={{fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem'}}>{dict.ctaTitle}</p>
        <p style={{color: 'rgba(255,255,255,0.7)', marginBottom: '2rem'}}>{dict.ctaDesc}</p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          <a href="tel:+84399762377" className="btn btn-primary" style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Phone size={18}/> {dict.ctaCall}</a>
          <a href="mailto:hoangquoctuan1395@gmail.com" className="btn btn-secondary" style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Mail size={18}/> {dict.ctaEmail}</a>
        </div>
      </motion.div>
    </div>
  );
}
