"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PenTool, Layout, Zap, PieChart, Layers, Route, ArrowRightCircle, Phone, Mail, ClipboardList, Building, Search, FileText, BarChart, RefreshCw } from 'lucide-react';

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
    title: "Dịch vụ Thiết kế BIM",
    desc: "Khai thác toàn bộ dữ liệu từ mô hình BIM để xuất bản vẽ thiết kế chất lượng cao, đồng bộ hóa tự động và phối hợp đa chuyên ngành. Ứng dụng Revit, Civil 3D và Dynamo để tối ưu hóa 100% quy trình thiết kế hạ tầng giao thông.",
    capTitle: "Năng lực cung cấp",
    capabilities: [
      { title: 'Bản vẽ thi công từ BIM', desc: 'Xuất bản vẽ 2D trực tiếp từ mô hình Revit 3D, đảm bảo đồng bộ tự động khi mô hình thay đổi.' },
      { title: 'Tự động hóa Dynamo', desc: 'Dùng Dynamo để tự động hóa bố trí cấu kiện, đặt tag, dim và tạo schedule — tiết kiệm 70% thời gian.' },
      { title: 'Bóc tách khối lượng', desc: 'Xuất tự động bảng khối lượng thép, bê tông, coffa từ mô hình. Kết xuất sang Excel theo định dạng.' },
      { title: 'Cốt thép chi tiết 3D', desc: 'Bố trí cốt thép đầy đủ 3D cho tất cả cấu kiện: trụ, mố, bản mặt cầu, dầm — xuất bản vẽ cốt thép.' },
      { title: 'Phối hợp đa chuyên ngành', desc: 'Phối hợp BIM giữa kết cấu, kiến trúc, MEP và địa kỹ thuật — phát hiện xung đột sớm thông qua Navisworks.' },
      { title: 'Civil 3D & Corridor', desc: 'Thiết kế tuyến đường, mặt cắt ngang, thoát nước và trắc dọc bằng Civil 3D — tích hợp với mô hình Revit.' }
    ],
    workTitle: "Công việc Thiết kế Tiêu biểu",
    works: [
      { title: 'Bản vẽ thi công BIM — Cầu bê tông DUL Cao tốc' },
      { title: 'Bố trí Cốt thép Chi tiết 3D — Nút giao Hà Nội - Hải Phòng' },
      { title: 'Bản vẽ Chi tiết Kết cấu — Cọc & Bệ móng cầu' },
      { title: 'Phối hợp Đa chuyên ngành — Nút giao cầu phức tạp' }
    ],
    flowTitle: "Quy trình triển khai",
    workflows: [
      { label: 'Tiếp nhận yêu cầu' },
      { label: 'Xây dựng mô hình' },
      { label: 'Tự động hóa' },
      { label: 'Kiểm tra xung đột' },
      { label: 'Xuất bản vẽ' },
      { label: 'Bóc tách KL' }
    ],
    ctaTitle: "Cần triển khai Thiết kế BIM cho dự án của bạn?",
    ctaDesc: "Liên hệ để được tư vấn phương án thiết kế BIM tối ưu — tiết kiệm thời gian và chi phí thiết kế",
    ctaCall: "Gọi ngay",
    ctaEmail: "Gửi Email"
  },
  en: {
    title: "BIM Design Services",
    desc: "Leverage full BIM model data to extract high-quality design drawings, ensuring automated synchronization and multidisciplinary coordination. Apply Revit, Civil 3D, and Dynamo to optimize 100% of the transportation infrastructure design workflow.",
    capTitle: "Capabilities",
    capabilities: [
      { title: 'Shop Drawings from BIM', desc: 'Extract 2D drawings directly from 3D Revit models, ensuring automatic synchronization when models change.' },
      { title: 'Dynamo Automation', desc: 'Use Dynamo to automate element placement, tagging, dimensioning, and scheduling — saving 70% of time.' },
      { title: 'Quantity Takeoff', desc: 'Automated export of rebar, concrete, and formwork quantity schedules from models. Export to formatted Excel.' },
      { title: 'Detailed 3D Rebar', desc: 'Full 3D rebar detailing for all elements: piers, abutments, decks, girders — producing rebar shop drawings.' },
      { title: 'Multidisciplinary Coordination', desc: 'BIM coordination across structural, architectural, MEP, and geotechnical — early clash detection via Navisworks.' },
      { title: 'Civil 3D & Corridor', desc: 'Design alignments, cross-sections, drainage, and profiles using Civil 3D — integrated with Revit models.' }
    ],
    workTitle: "Featured Design Work",
    works: [
      { title: 'BIM Shop Drawings — PT Concrete Highway Bridge' },
      { title: 'Detailed 3D Rebar Detailing — Hanoi - Hai Phong Interchange' },
      { title: 'Structural Detail Drawings — Piles & Bridge Foundations' },
      { title: 'Multidisciplinary Coordination — Complex Bridge Interchange' }
    ],
    flowTitle: "Implementation Workflow",
    workflows: [
      { label: 'Receive Requirements' },
      { label: 'Build Model' },
      { label: 'Automation' },
      { label: 'Clash Detection' },
      { label: 'Export Drawings' },
      { label: 'Quantity Takeoff' }
    ],
    ctaTitle: "Need BIM Design implementation for your project?",
    ctaDesc: "Contact us for optimal BIM design solutions — save design time and costs",
    ctaCall: "Call Now",
    ctaEmail: "Send Email"
  },
  zh: {
    title: "BIM 设计服务",
    desc: "利用完整的 BIM 模型数据提取高质量的设计图纸，确保自动同步和多学科协调。应用 Revit、Civil 3D 和 Dynamo 来优化 100% 的交通基础设施设计工作流程。",
    capTitle: "能力",
    capabilities: [
      { title: '来自 BIM 的施工图', desc: '直接从 3D Revit 模型提取 2D 图纸，确保模型更改时自动同步。' },
      { title: 'Dynamo 自动化', desc: '使用 Dynamo 自动执行元素放置、标记、尺寸标注和计划 — 节省 70% 的时间。' },
      { title: '工程量估算', desc: '从模型自动导出钢筋、混凝土和模板数量表。导出到格式化的 Excel。' },
      { title: '详细 3D 钢筋', desc: '所有元素的完整 3D 钢筋细节：桥墩、桥台、桥面板、梁 — 制作钢筋施工图。' },
      { title: '多学科协调', desc: '跨结构、建筑、MEP 和岩土工程的 BIM 协调 — 通过 Navisworks 早期冲突检测。' },
      { title: 'Civil 3D 和走廊', desc: '使用 Civil 3D 设计路线、横截面、排水和剖面图 — 与 Revit 模型集成。' }
    ],
    workTitle: "精选设计工作",
    works: [
      { title: 'BIM 施工图 — 预应力混凝土公路桥' },
      { title: '详细 3D 钢筋细节 — 河内-海防立交桥' },
      { title: '结构详图 — 桩和桥梁基础' },
      { title: '多学科协调 — 复杂桥梁立交' }
    ],
    flowTitle: "实施工作流程",
    workflows: [
      { label: '接收需求' },
      { label: '构建模型' },
      { label: '自动化' },
      { label: '冲突检测' },
      { label: '导出图纸' },
      { label: '工程量估算' }
    ],
    ctaTitle: "需要为您的项目实施 BIM 设计？",
    ctaDesc: "联系我们获取最佳 BIM 设计解决方案 — 节省设计时间和成本",
    ctaCall: "立即致电",
    ctaEmail: "发送邮件"
  },
  ja: {
    title: "BIM設計サービス",
    desc: "BIMモデルデータを最大限に活用して高品質の設計図面を抽出し、自動同期と多分野の調整を確実に行います。Revit、Civil 3D、Dynamoを適用して、交通インフラストラクチャ設計ワークフローの100%を最適化します。",
    capTitle: "提供能力",
    capabilities: [
      { title: 'BIMからの施工図', desc: '3D Revitモデルから直接2D図面を抽出し、モデルの変更時に自動同期を保証します。' },
      { title: 'Dynamoの自動化', desc: 'Dynamoを使用して、要素の配置、タグ付け、寸法記入、スケジュール作成を自動化し、時間を70%節約します。' },
      { title: '数量拾い', desc: 'モデルから鉄筋、コンクリート、型枠の数量表を自動エクスポート。フォーマットされたExcelにエクスポートします。' },
      { title: '詳細な3D鉄筋', desc: 'すべての要素（橋脚、橋台、床版、桁）の完全な3D鉄筋詳細化 — 鉄筋施工図の作成。' },
      { title: '多分野の調整', desc: '構造、建築、MEP、地盤工学にわたるBIMの調整 — Navisworksによる早期の干渉チェック。' },
      { title: 'Civil 3Dとコリドー', desc: 'Civil 3Dを使用して線形、横断図、排水、縦断図を設計 — Revitモデルと統合。' }
    ],
    workTitle: "注目の設計業務",
    works: [
      { title: 'BIM施工図 — プレストレストコンクリート高速道路橋' },
      { title: '詳細3D鉄筋詳細化 — ハノイ - ハイフォンインターチェンジ' },
      { title: '構造詳細図面 — 杭と橋梁基礎' },
      { title: '多分野の調整 — 複雑な橋梁インターチェンジ' }
    ],
    flowTitle: "導入ワークフロー",
    workflows: [
      { label: '要件の受付' },
      { label: 'モデル構築' },
      { label: '自動化' },
      { label: '干渉チェック' },
      { label: '図面のエクスポート' },
      { label: '数量拾い' }
    ],
    ctaTitle: "プロジェクトのBIM設計導入が必要ですか？",
    ctaDesc: "最適なBIM設計ソリューションについてはお問い合わせください — 設計時間とコストを節約します",
    ctaCall: "今すぐ電話",
    ctaEmail: "メールを送信"
  }
};

export default function TabBIMDesign() {
  const { lang } = useLanguage();
  const dict = localDict[lang] || localDict.vi;

  return (
    <div className="tab-wrapper">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{background: 'linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(15,52,96,0.9) 100%)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2.5rem 3rem', marginBottom: '2.5rem', color: 'white', position: 'relative', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)'}}>
        <div style={{position: 'absolute', top: '-30%', right: '-10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(237,28,36,0.2) 0%, transparent 70%)', pointerEvents: 'none'}}></div>
        <div style={{position: 'relative', zIndex: 1}}>
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 1 }, visible: { opacity: 1, transition: { staggerChildren: 0.04 } } }} style={{fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '0.5rem'}}>
            <PenTool size={28} color="var(--primary-red)" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '12px', marginTop: '-4px' }}/>
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

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', paddingBottom: '0.8rem', borderBottom: '2px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'white'}}><span>{dict.capTitle}</span></motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem', marginBottom: '3.5rem'}}>
        {dict.capabilities.map((cap, i) => {
          const originalCap = [
            { icon: <Layout size={28}/>, color: 'var(--primary-red)' },
            { icon: <Zap size={28}/>, color: 'var(--primary-green)' },
            { icon: <PieChart size={28}/>, color: 'var(--primary-red)' },
            { icon: <Layers size={28}/>, color: 'var(--primary-green)' },
            { icon: <ArrowRightCircle size={28}/>, color: 'var(--primary-red)' },
            { icon: <Route size={28}/>, color: 'var(--primary-green)' }
          ][i];
          return (
          <motion.div key={i} whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.3)", transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }} style={{background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', borderTop: `3px solid ${originalCap.color}`, display: 'flex', alignItems: 'flex-start', gap: '1rem', color: 'white'}}>
            <div style={{color: originalCap.color, flexShrink: 0}}>{originalCap.icon}</div>
            <div className="tab-wrapper">
              <div style={{fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem'}}>{cap.title}</div>
              <div style={{fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5}}>{cap.desc}</div>
            </div>
          </motion.div>
        )})}
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', paddingBottom: '0.8rem', borderBottom: '2px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'white'}}><span>{dict.workTitle}</span></motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem', marginBottom: '3.5rem'}}>
        {dict.works.map((work, i) => {
          const originalImg = [
            'https://cdn.sanity.io/images/wd53xh69/production/db1cb7c2f087af9bc6f3be24ae434802ee97910d-1821x1470.png',
            'https://cdn.sanity.io/images/wd53xh69/production/7f4b494aa9d3be0b48274154a97b2509941ef80d-1750x1044.png',
            'https://cdn.sanity.io/images/wd53xh69/production/46d7f991db5e541eb7ca29f6eda50b1662b706e6-640x640.jpg',
            'https://cdn.sanity.io/images/wd53xh69/production/b9db7e55d86baa26e9f4183ebf255a15c2665f49-1677x1039.png'
          ][i];
          return (
          <motion.div key={i} whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.3)", transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }} style={{background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)'}}>
            <div style={{position: 'relative', height: '220px'}}>
              <Image src={originalImg} alt={work.title} fill style={{objectFit: 'cover'}} sizes="(max-width: 768px) 100vw, 50vw"/>
            </div>
            <div style={{padding: '1.2rem 1.4rem'}}>
              <div style={{fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, marginBottom: '0.5rem', color: 'white', lineHeight: 1.3}}>{work.title}</div>
            </div>
          </motion.div>
        )})}
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', paddingBottom: '0.8rem', borderBottom: '2px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'white'}}>
        <RefreshCw style={{color: 'var(--primary-green)'}}/> <span>{dict.flowTitle}</span>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '3.5rem', flexWrap: 'wrap'}}>
        {dict.workflows.map((wf, i) => {
          const originalWf = [
            { num: '1', icon: <ClipboardList size={32}/>, color: 'var(--primary-green)' },
            { num: '2', icon: <Building size={32}/>, color: 'var(--primary-red)' },
            { num: '3', icon: <Zap size={32}/>, color: 'var(--primary-green)' },
            { num: '4', icon: <Search size={32}/>, color: 'var(--primary-red)' },
            { num: '5', icon: <FileText size={32}/>, color: 'var(--primary-green)' },
            { num: '6', icon: <BarChart size={32}/>, color: 'var(--primary-red)' }
          ][i];
          return (
          <motion.div key={i} whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.2)", transition: { duration: 0.4 } }} style={{flex: 1, minWidth: '130px', textAlign: 'center', padding: '1.5rem 0.8rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px'}}>
            <div style={{fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, color: originalWf.color, lineHeight: 1, marginBottom: '0.6rem'}}>{originalWf.num}</div>
            <div style={{fontSize: '1.8rem', marginBottom: '0.6rem'}}>{originalWf.icon}</div>
            <div style={{fontWeight: 700, fontSize: '0.85rem', color: 'white'}}>{wf.label}</div>
          </motion.div>
        )})}
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
