"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Users, Briefcase, GraduationCap, PenTool, LayoutTemplate, Activity, 
  CheckCircle2, PlayCircle, FolderOpen, Video, BookOpen, Layers, Building2, Phone, Mail
} from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const localDict = {
  vi: {
    title: "ĐÀO TẠO REVIT CẦU ĐƯỜNG CHO DOANH NGHIỆP",
    badge: "Đào tạo Doanh nghiệp",
    desc: "Chương trình đào tạo chuyên sâu được thiết kế riêng cho đội ngũ kỹ sư tư vấn thiết kế, triển khai mô hình BIM cầu đường với Revit và tự động hóa bằng Dynamo tại doanh nghiệp của bạn.",
    stats: [
      { num: "16+", label: "Bài học" },
      { num: "40+", label: "Giờ thực hành" },
      { num: "100%", label: "Thực chiến" },
      { num: "∞", label: "Hỗ trợ sau khóa" }
    ],
    targetTitle: "Đối tượng tham gia",
    targets: [
      { title: 'Kỹ sư xây dựng cầu đường' },
      { title: 'Kỹ sư thiết kế hạ tầng' },
      { title: 'Đội ngũ BIM tại công ty' },
      { title: 'Quản lý dự án cần hiểu BIM' },
      { title: 'Kỹ sư mới tốt nghiệp' },
      { title: 'Kỹ sư CAD sang BIM' }
    ],
    outcomeTitle: "Kết quả sau khoá học",
    outcomes: [
      "Xây dựng đầy đủ Family cầu đường: Cọc, Trụ, Mố, Dầm Super T, Cáp DUL",
      "Tự động hóa đặt cấu kiện bằng Dynamo",
      "Bố trí cốt thép, tạo bản vẽ thi công tự động",
      "Xuất khối lượng sang Excel, phối hợp CAD & Civil 3D",
      "Xây dựng quy trình BIM chuẩn hóa cho đội nhóm",
      "Tăng năng suất 3-5 lần so với CAD truyền thống"
    ],
    moduleTitle: "Nội dung chương trình",
    modules: [
      {
        part: "Phần 01 — Family Modeling",
        title: "Xây dựng Family cầu đường trong Revit",
        items: [
          "Family cọc khoan nhồi (parametric theo đường kính, chiều dài)",
          "Family trụ cầu định hình (trụ thẳng, trụ cong)",
          "Family mố cầu, mố vùi chân taluy",
          "Family dầm Super T / dầm I tiêu chuẩn 22TCN",
          "Family cáp dự ứng lực (DUL) trong dầm",
          "Family gối cầu cao su / chậu / pot bearing"
        ]
      },
      {
        part: "Phần 02 — Dynamo Automation",
        title: "Tự động hóa đặt cấu kiện bằng Dynamo",
        items: [
          "Làm quen Dynamo: node, wire, list, logic cơ bản",
          "Đọc tọa độ tim tuyến từ file Civil 3D (.dwg / .xml)",
          "Đặt cọc khoan nhồi hàng loạt theo bảng tọa độ",
          "Đặt mố trụ cầu dọc theo tim tuyến với đúng góc nghiêng",
          "Đặt gối cầu, dầm cầu, bản mặt cầu tự động",
          "Script Dynamo tùy chỉnh theo tiêu chuẩn doanh nghiệp"
        ]
      },
      {
        part: "Phần 03 — Reinforcement & Drawings",
        title: "Bố trí cốt thép & Hoàn thiện bản vẽ",
        items: [
          "Bố trí cốt thép trong trụ, mố, bản mặt cầu bằng công cụ Revit",
          "Tạo khung tên bản vẽ chuẩn ISO, thiết lập sheet",
          "Tạo DIM, TAG cốt thép, chú thích tự động",
          "Xuất bảng khối lượng thép (Schedule → Excel)",
          "In ấn, xuất PDF/DWG, quản lý đường nét đúng chuẩn",
          "Phối hợp file CAD / Civil 3D — đúng tọa độ hệ thống"
        ]
      },
      {
        part: "Phần 04 — Deliverables",
        title: "Bộ tài liệu & Quy trình chuẩn bàn giao",
        items: [
          "Bộ Family Library cầu đường chuẩn hóa cho doanh nghiệp",
          "Bộ Script Dynamo bố trí cấu kiện tự động (tái sử dụng)",
          "Template Revit chuẩn hóa (BIM Execution Plan tích hợp)",
          "Tài liệu hướng dẫn sử dụng (SOP) nội bộ",
          "Hỗ trợ kỹ thuật 1-1 sau khi kết thúc khoá học",
          "Chứng nhận hoàn thành khoá học BIM Cầu đường"
        ]
      }
    ],
    galleryTitle: "Hình ảnh Đào tạo Thực tế",
    ctaTitle: "Đăng ký tư vấn chương trình đào tạo cho doanh nghiệp",
    ctaDesc: "Chúng tôi sẽ thiết kế chương trình học phù hợp với quy trình và dự án thực tế của đội nhóm bạn",
    ctaCall: "Gọi ngay",
    ctaEmail: "Gửi Email"
  },
  en: {
    title: "CORPORATE ROAD & BRIDGE REVIT TRAINING",
    badge: "Corporate Training",
    desc: "An intensive training program tailored for engineering teams to implement road and bridge BIM modeling with Revit and Dynamo automation directly at your enterprise.",
    stats: [
      { num: "16+", label: "Lessons" },
      { num: "40+", label: "Practice Hours" },
      { num: "100%", label: "Practical" },
      { num: "∞", label: "Post-course Support" }
    ],
    targetTitle: "Target Audience",
    targets: [
      { title: 'Bridge & Road Engineers' },
      { title: 'Infrastructure Designers' },
      { title: 'In-house BIM Teams' },
      { title: 'Project Managers' },
      { title: 'Fresh Graduates' },
      { title: 'CAD to BIM Engineers' }
    ],
    outcomeTitle: "Learning Outcomes",
    outcomes: [
      "Build complete bridge families: Piles, Piers, Abutments, Super T Girders, PT Cables",
      "Automate element placement using Dynamo",
      "Automate rebar detailing and shop drawings",
      "Export quantities to Excel, coordinate with CAD & Civil 3D",
      "Develop standardized BIM workflows for teams",
      "Increase productivity 3-5x compared to traditional CAD"
    ],
    moduleTitle: "Program Content",
    modules: [
      {
        part: "Part 01 — Family Modeling",
        title: "Building Bridge Families in Revit",
        items: [
          "Bored pile family (parametric diameter, length)",
          "Standard pier family (straight, curved)",
          "Abutment family, slope embedded abutments",
          "Super T / I Girder family (22TCN standard)",
          "Post-tensioning (PT) cable family in girders",
          "Elastomeric / Pot bearing family"
        ]
      },
      {
        part: "Part 02 — Dynamo Automation",
        title: "Automating Placement with Dynamo",
        items: [
          "Introduction to Dynamo: nodes, wires, lists, basic logic",
          "Read alignment coordinates from Civil 3D (.dwg / .xml)",
          "Batch placement of bored piles via coordinate tables",
          "Place piers and abutments along alignment with correct skew",
          "Automated placement of bearings, girders, and decks",
          "Custom Dynamo scripts tailored to company standards"
        ]
      },
      {
        part: "Part 03 — Reinforcement & Drawings",
        title: "Rebar Detailing & Drawing Production",
        items: [
          "Rebar detailing in piers, abutments, and decks using Revit",
          "Create ISO standard title blocks, set up sheets",
          "Automated dimensioning, rebar tags, and annotations",
          "Export rebar schedules to Excel",
          "Printing, PDF/DWG export, line weight management",
          "Coordinate CAD / Civil 3D files with correct coordinates"
        ]
      },
      {
        part: "Part 04 — Deliverables",
        title: "Handover Documents & Standard Workflows",
        items: [
          "Standardized bridge Family Library for the enterprise",
          "Dynamo script library for automated placement (reusable)",
          "Standardized Revit Template (integrated BIM Execution Plan)",
          "Internal Standard Operating Procedures (SOP) manuals",
          "1-on-1 technical support after course completion",
          "Bridge BIM training completion certificate"
        ]
      }
    ],
    galleryTitle: "Real Training Gallery",
    ctaTitle: "Register for Corporate Training Consultation",
    ctaDesc: "We will design a curriculum tailored to your team's real workflows and projects",
    ctaCall: "Call Now",
    ctaEmail: "Send Email"
  },
  zh: {
    title: "企业级路桥 REVIT 培训",
    badge: "企业培训",
    desc: "专为工程团队量身定制的强化培训课程，旨在您的企业内部直接实施使用 Revit 和 Dynamo 自动化的路桥 BIM 建模。",
    stats: [
      { num: "16+", label: "课程" },
      { num: "40+", label: "实操小时数" },
      { num: "100%", label: "实战演练" },
      { num: "∞", label: "课后支持" }
    ],
    targetTitle: "目标受众",
    targets: [
      { title: '路桥工程师' },
      { title: '基础设施设计师' },
      { title: '内部 BIM 团队' },
      { title: '项目经理' },
      { title: '应届毕业生' },
      { title: 'CAD 转 BIM 工程师' }
    ],
    outcomeTitle: "学习成果",
    outcomes: [
      "构建完整的桥梁族：桩、桥墩、桥台、Super T 梁、预应力索",
      "使用 Dynamo 自动放置构件",
      "自动化钢筋详图和施工图",
      "将工程量导出到 Excel，与 CAD 和 Civil 3D 协调",
      "为团队开发标准化的 BIM 工作流程",
      "与传统 CAD 相比，生产力提高 3-5 倍"
    ],
    moduleTitle: "课程内容",
    modules: [
      {
        part: "第一部分 — 族建模",
        title: "在 Revit 中构建桥梁族",
        items: [
          "钻孔灌注桩族（参数化直径、长度）",
          "标准桥墩族（直线、曲线）",
          "桥台族，边坡埋置桥台",
          "Super T / I 梁族",
          "梁内预应力 (PT) 索族",
          "橡胶/盆式支座族"
        ]
      },
      {
        part: "第二部分 — Dynamo 自动化",
        title: "使用 Dynamo 自动放置",
        items: [
          "Dynamo 简介：节点、连线、列表、基本逻辑",
          "从 Civil 3D 读取中心线坐标",
          "通过坐标表批量放置钻孔灌注桩",
          "沿具有正确斜角的路线放置桥墩和桥台",
          "自动放置支座、梁和桥面板",
          "根据公司标准定制的 Dynamo 脚本"
        ]
      },
      {
        part: "第三部分 — 钢筋与图纸",
        title: "钢筋详图和图纸制作",
        items: [
          "使用 Revit 工具在桥墩、桥台和桥面板中布置钢筋",
          "创建 ISO 标准图框，设置图纸",
          "自动尺寸标注、钢筋标签和注释",
          "将钢筋表导出到 Excel",
          "打印、PDF/DWG 导出、线宽管理",
          "使用正确坐标协调 CAD / Civil 3D 文件"
        ]
      },
      {
        part: "第四部分 — 交付成果",
        title: "移交文件和标准工作流程",
        items: [
          "面向企业的标准化桥梁族库",
          "用于自动放置的 Dynamo 脚本库（可重复使用）",
          "标准化 Revit 模板（集成 BIM 执行计划）",
          "内部标准操作程序 (SOP) 手册",
          "课程结束后的 1 对 1 技术支持",
          "桥梁 BIM 培训结业证书"
        ]
      }
    ],
    galleryTitle: "真实培训图库",
    ctaTitle: "注册企业培训咨询",
    ctaDesc: "我们将设计适合您团队实际工作流程和项目的课程",
    ctaCall: "立即致电",
    ctaEmail: "发送邮件"
  },
  ja: {
    title: "企業向け道路・橋梁 REVIT トレーニング",
    badge: "企業トレーニング",
    desc: "RevitとDynamoの自動化を用いた道路・橋梁BIMモデリングを企業内で直接実装するための、エンジニアリングチーム向けにカスタマイズされた集中トレーニングプログラム。",
    stats: [
      { num: "16+", label: "レッスン" },
      { num: "40+", label: "実践時間" },
      { num: "100%", label: "実践的" },
      { num: "∞", label: "コース後のサポート" }
    ],
    targetTitle: "対象者",
    targets: [
      { title: '橋梁・道路エンジニア' },
      { title: 'インフラ設計者' },
      { title: '社内BIMチーム' },
      { title: 'プロジェクトマネージャー' },
      { title: '新卒者' },
      { title: 'CADからBIMへの移行エンジニア' }
    ],
    outcomeTitle: "学習成果",
    outcomes: [
      "完全な橋梁ファミリの構築：杭、橋脚、橋台、Super T桁、PTケーブル",
      "Dynamoを使用した要素配置の自動化",
      "鉄筋の配筋と施工図の自動化",
      "数量をExcelにエクスポート、CADおよびCivil 3Dとの連携",
      "チーム向けの標準化されたBIMワークフローの構築",
      "従来のCADと比較して生産性を3〜5倍に向上"
    ],
    moduleTitle: "プログラム内容",
    modules: [
      {
        part: "パート 01 — ファリモデリング",
        title: "Revitでの橋梁ファミリの構築",
        items: [
          "場所打ち杭ファミリ（パラメトリックな直径、長さ）",
          "標準橋脚ファミリ（直線、曲線）",
          "橋台ファミリ、法面埋め込み橋台",
          "Super T / I桁ファミリ",
          "桁内のプレストレスト（PT）ケーブルファミリ",
          "ゴム/ポット支承ファミリ"
        ]
      },
      {
        part: "パート 02 — Dynamo自動化",
        title: "Dynamoを使用した配置の自動化",
        items: [
          "Dynamoの紹介：ノード、ワイヤー、リスト、基本ロジック",
          "Civil 3Dから線形座標を読み取る",
          "座標テーブルによる場所打ち杭の一括配置",
          "正しい斜角で線形に沿って橋脚と橋台を配置",
          "支承、桁、床版の自動配置",
          "企業標準に合わせたカスタムDynamoスクリプト"
        ]
      },
      {
        part: "パート 03 — 鉄筋と図面",
        title: "鉄筋の配筋と図面作成",
        items: [
          "Revitツールを使用した橋脚、橋台、床版の配筋",
          "ISO標準の図面枠の作成、シートの設定",
          "自動寸法記入、鉄筋タグ、注釈",
          "鉄筋表をExcelにエクスポート",
          "印刷、PDF/DWGエクスポート、線の太さの管理",
          "正しい座標でCAD / Civil 3Dファイルを連携"
        ]
      },
      {
        part: "パート 04 — 成果物",
        title: "引き渡しドキュメントと標準ワークフロー",
        items: [
          "企業向けの標準化された橋梁ファミリライブラリ",
          "自動配置用のDynamoスクリプトライブラリ（再利用可能）",
          "標準化されたRevitテンプレート（BIM実行計画統合）",
          "内部標準作業手順書（SOP）マニュアル",
          "コース修了後の1対1の技術サポート",
          "橋梁BIMトレーニング修了証明書"
        ]
      }
    ],
    galleryTitle: "実際のトレーニングギャラリー",
    ctaTitle: "企業トレーニングの相談を登録する",
    ctaDesc: "チームの実際のワークフローとプロジェクトに合わせたカリキュラムを設計します",
    ctaCall: "今すぐ電話",
    ctaEmail: "メールを送信"
  }
};

const gallery = [
  "https://cdn.sanity.io/images/wd53xh69/production/88439824e169ad794a6c10a81c616a4525b5c8ec-1747x1073.png",
  "https://cdn.sanity.io/images/wd53xh69/production/e4ddfdb3ce3a3ef7486e5cfc9f8c6816222c11c2-1758x1146.png",
  "https://cdn.sanity.io/images/wd53xh69/production/1108db6d1e60ad635218cf75a3b5228521bf5731-1699x1042.png",
  "https://cdn.sanity.io/images/wd53xh69/production/e56260ea0ec9ed04d6a2bd80114e07ad693861ec-1699x1147.png"
];

export default function TabBIMCorp() {
  const { lang } = useLanguage();
  const dict = localDict[lang] || localDict.vi;

  return (
    <div className="tab-wrapper">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{position: 'relative', borderRadius: '16px', overflow: 'hidden', marginBottom: '3rem', minHeight: '320px', display: 'flex', alignItems: 'flex-end', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}>
        <Image src="https://cdn.sanity.io/images/wd53xh69/production/cfee39288069a6b736f021f2d34cb5f39e7a257e-640x640.jpg" alt={dict.title} fill style={{objectFit: 'cover', objectPosition: 'center'}} />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,30,0.92) 0%, rgba(10,10,30,0.4) 60%, transparent 100%)'}}></div>
        <div style={{position: 'relative', zIndex: 1, padding: '2.5rem', color: 'white'}}>
          <div style={{display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--primary-red)', color: 'white', padding: '6px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem'}}>
            <Building2 size={14} /> {dict.badge}
          </div>
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 1 }, visible: { opacity: 1, transition: { staggerChildren: 0.04 } } }} style={{fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, lineHeight: 1.2, color: 'white', marginBottom: '0.8rem', textShadow: '0 2px 10px rgba(0,0,0,0.3)'}}>
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
          <p style={{fontSize: '1rem', color: 'rgba(255,255,255,0.9)', maxWidth: '650px', lineHeight: 1.6}}>{dict.desc}</p>
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', background: 'linear-gradient(135deg, rgba(26,26,46,0.8), rgba(15,52,96,0.8))', backdropFilter: 'blur(10px)', borderRadius: '16px', padding: '2.5rem 2rem', color: 'white', marginBottom: '3rem', border: '1px solid rgba(255,255,255,0.05)'}}>
        {dict.stats.map((stat, idx) => (
          <div style={{textAlign: 'center'}} key={idx}>
            <div style={{fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary-green)', textShadow: '0 0 20px rgba(22, 163, 74, 0.4)'}}>{stat.num}</div>
            <div style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem', fontWeight: 600}}>{stat.label}</div>
          </div>
        ))}
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{marginBottom: '3.5rem'}}>
        <div style={{fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', paddingBottom: '0.8rem', borderBottom: '2px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', color: 'white'}}>
          <Users style={{marginRight: '10px', color: 'var(--primary-red)'}}/> {dict.targetTitle}
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.2rem'}}>
          {[
            { icon: <Activity size={32} />, color: 'var(--primary-red)' },
            { icon: <PenTool size={32} />, color: 'var(--primary-green)' },
            { icon: <Layers size={32} />, color: 'var(--primary-red)' },
            { icon: <Briefcase size={32} />, color: 'var(--primary-green)' },
            { icon: <GraduationCap size={32} />, color: 'var(--primary-red)' },
            { icon: <LayoutTemplate size={32} />, color: 'var(--primary-green)' }
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.2)", transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }} style={{background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1.5rem', borderTop: `3px solid ${item.color}`, textAlign: 'center', color: 'white'}}>
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem', color: item.color}}>{item.icon}</div>
              <div style={{fontWeight: 700, fontSize: '0.95rem'}}>{dict.targets[i]?.title}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{marginBottom: '3.5rem'}}>
        <div style={{fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', paddingBottom: '0.8rem', borderBottom: '2px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', color: 'white'}}>
          <CheckCircle2 style={{marginRight: '10px', color: 'var(--primary-green)'}}/> {dict.outcomeTitle}
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1rem'}}>
          {dict.outcomes.map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }} style={{display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', padding: '1rem 1.2rem', borderRadius: '10px', fontSize: '0.95rem', fontWeight: 600, color: 'white', transition: 'all 0.3s'}}>
              <CheckCircle2 size={18} style={{marginRight: '12px', color: 'var(--primary-green)', flexShrink: 0}}/>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{marginBottom: '3.5rem'}}>
        <div style={{fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', paddingBottom: '0.8rem', borderBottom: '2px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', color: 'white'}}>
          <BookOpen style={{marginRight: '10px', color: 'var(--primary-red)'}}/> {dict.moduleTitle}
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem'}}>
          {dict.modules.map((mod, i) => {
            const originalMod = [
              { img: "https://cdn.sanity.io/images/wd53xh69/production/3de502a1f7724b0597f24a530ecdf7e28d037b5c-640x640.jpg", color: "var(--primary-red)" },
              { img: "https://cdn.sanity.io/images/wd53xh69/production/4bc40ae710fe30082bfe08e7da7cf3a962a31c06-640x640.jpg", color: "var(--primary-green)" },
              { img: "https://cdn.sanity.io/images/wd53xh69/production/46d7f991db5e541eb7ca29f6eda50b1662b706e6-640x640.jpg", color: "var(--primary-red)" },
              { img: "https://cdn.sanity.io/images/wd53xh69/production/29481a41167c81d694275c5674899510449aaf90-2289x1172.png", color: "var(--primary-green)" }
            ][i];
            return (
              <motion.div key={i} whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }} style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '14px', overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
                <div style={{position: 'relative', height: '200px'}}>
                  <Image src={originalMod.img} alt={mod.title} fill style={{objectFit: 'cover'}} />
                </div>
                <div style={{padding: '1.5rem', flex: 1, color: 'white'}}>
                  <div style={{fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800, color: originalMod.color, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem'}}>{mod.part}</div>
                  <div style={{fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem'}}>{mod.title}</div>
                  <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                    {mod.items.map((item, idx) => (
                      <li key={idx} style={{display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem', lineHeight: 1.4}}>
                        <span style={{color: originalMod.color, flexShrink: 0}}>▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{marginBottom: '3.5rem'}}>
        <div style={{fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', paddingBottom: '0.8rem', borderBottom: '2px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', color: 'white'}}>
          <FolderOpen style={{marginRight: '10px', color: 'var(--primary-green)'}}/> {dict.galleryTitle}
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem'}}>
          {gallery.map((img, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02, zIndex: 10, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }} style={{borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/9', position: 'relative'}}>
              <Image src={img} alt={`Gallery ${i+1}`} fill style={{objectFit: 'cover'}} sizes="(max-width: 768px) 100vw, 50vw" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{textAlign: 'center', padding: '3rem', background: 'linear-gradient(135deg, rgba(26,26,46,0.9), rgba(15,52,96,0.9))', backdropFilter: 'blur(10px)', borderRadius: '16px', color: 'white', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)'}}>
        <p style={{fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'white', marginBottom: '0.8rem'}}>{dict.ctaTitle}</p>
        <p style={{color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', fontSize: '1.05rem'}}>{dict.ctaDesc}</p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          <a href="tel:+84399762377" className="btn btn-primary" style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Phone size={18}/> {dict.ctaCall}</a>
          <a href="mailto:hoangquoctuan1395@gmail.com" className="btn btn-secondary" style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Mail size={18}/> {dict.ctaEmail}</a>
        </div>
      </motion.div>
    </div>
  );
}
