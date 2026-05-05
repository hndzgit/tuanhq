"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Box, Phone, Mail } from 'lucide-react';

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
    title: "Dịch vụ Mô hình BIM",
    desc: "Xây dựng mô hình BIM chính xác cao, toàn diện cho các dự án hạ tầng giao thông, dân dụng và công nghiệp. Ứng dụng Revit, Civil 3D, Dynamo và công nghệ Scan to BIM để tối ưu hóa quy trình thiết kế, thi công và quản lý vận hành.",
    projects: [
      {
        title: 'Mô hình BIM Cầu Bê tông — Cao tốc Hữu Nghị - Chi Lăng',
        desc: 'Triển khai mô hình BIM toàn diện cho hệ thống cầu bê tông dự ứng lực trên tuyến cao tốc Hữu Nghị - Chi Lăng. Mô hình bao gồm đầy đủ kết cấu móng cọc, trụ, mố, dầm Super T và bản mặt cầu với dữ liệu thuộc tính phục vụ quản lý vòng đời dự án.',
        tag: 'Cao tốc'
      },
      {
        title: 'Cầu trong Nút giao Hà Nội - Hải Phòng',
        desc: 'Mô hình BIM hệ thống cầu phức tạp trong nút giao cao tốc Hà Nội - Hải Phòng với nhiều tầng vượt, kết hợp cầu cong và cầu thẳng. Dữ liệu BIM hỗ trợ phối hợp đa chuyên ngành.',
        tag: 'Nút giao'
      },
      {
        title: 'Mô hình Cốt thép Chi tiết — Nút giao Hà Nội - Hải Phòng',
        desc: 'Bố trí cốt thép chi tiết 3D cho trụ cầu, mố cầu và bản mặt cầu trong nút giao phức tạp. Mô hình cho phép xuất bản vẽ thi công tự động, bảng khối lượng thép.',
        tag: 'Cốt thép'
      },
      {
        title: 'Mô hình Cầu thép — Tiêu chuẩn Nhật Bản',
        desc: 'Mô hình BIM cầu thép theo tiêu chuẩn thiết kế Nhật Bản (JIS), bao gồm hệ dầm thép hộp, liên kết bu-lông cường độ cao và chi tiết hàn.',
        tag: 'Cầu thép'
      },
      {
        title: 'Mô hình BIM Hầm đường bộ — Đèo Hoàng Liên',
        desc: 'Mô hình BIM dự án hầm đường bộ xuyên núi qua đèo Hoàng Liên, bao gồm vỏ hầm, hệ thống thoát nước, chiếu sáng và điều khiển giao thông. Tích hợp dữ liệu địa chất để phân tích rủi ro thi công ngầm.',
        tag: 'Hầm đường bộ'
      },
      {
        title: 'Thiết kế Nhà phố — Mô hình kiến trúc & kết cấu',
        desc: 'Mô hình BIM tổng thể nhà phố nhiều tầng, tích hợp đồng bộ kiến trúc, kết cấu và MEP. Ứng dụng Revit để tạo bản vẽ xin phép xây dựng.',
        tag: 'Kiến trúc'
      },
      {
        title: 'Scan to BIM — Mô hình BIM từ dữ liệu Point Cloud',
        desc: 'Ứng dụng quét laser 3D thu thập dữ liệu Point Cloud hiện trạng công trình, chuyển đổi thành mô hình BIM chính xác trong Revit. Phục vụ cải tạo, nâng cấp.',
        tag: 'Scan to BIM'
      },
      {
        title: 'Mô hình BIM Trạm bơm Thủy lợi',
        desc: 'Mô hình BIM 3D toàn bộ trạm bơm thủy lợi, bao gồm nhà bơm, buồng hút, buồng xả, đường ống và thiết bị cơ điện. Hỗ trợ phối hợp thiết kế.',
        tag: 'Thủy lợi'
      },
      {
        title: 'Chi tiết kết cấu Trạm bơm Thủy lợi',
        desc: 'Mô hình kết cấu chi tiết bên trong trạm bơm: hệ bản sàn, dầm, cột và tường vây bê tông cốt thép. Xuất bản vẽ thi công chi tiết.',
        tag: 'Thủy lợi'
      },
      {
        title: 'Mô hình Tường chắn — Nút giao phức tạp',
        desc: 'Mô hình BIM hệ thống tường chắn đất trong nút giao đô thị phức tạp, bao gồm tường góc, tường bản ghép và tường trọng lực.',
        tag: 'Tường chắn'
      }
    ],
    ctaTitle: "Cần tư vấn dịch vụ Mô hình BIM?",
    ctaDesc: "Liên hệ để nhận báo giá và phương án triển khai BIM tối ưu cho dự án của bạn",
    ctaCall: "Gọi ngay",
    ctaEmail: "Gửi Email"
  },
  en: {
    title: "BIM Modeling Services",
    desc: "Building highly accurate, comprehensive BIM models for transportation, civil, and industrial infrastructure projects. Applying Revit, Civil 3D, Dynamo, and Scan to BIM technology to optimize design, construction, and operation management workflows.",
    projects: [
      {
        title: 'Concrete Bridge BIM Model — Huu Nghi - Chi Lang Expressway',
        desc: 'Comprehensive BIM implementation for the prestressed concrete bridge system on the Huu Nghi - Chi Lang expressway. The model includes complete pile foundations, piers, abutments, Super T girders, and deck slabs with attribute data for project lifecycle management.',
        tag: 'Expressway'
      },
      {
        title: 'Bridges in Hanoi - Hai Phong Interchange',
        desc: 'BIM modeling of complex bridge systems in the Hanoi - Hai Phong expressway interchange with multiple overpass levels, combining curved and straight bridges. BIM data supports multidisciplinary coordination.',
        tag: 'Interchange'
      },
      {
        title: 'Detailed Rebar Model — Hanoi - Hai Phong Interchange',
        desc: 'Detailed 3D rebar layout for bridge piers, abutments, and decks in a complex interchange. The model allows automated shop drawing and rebar schedule generation.',
        tag: 'Rebar'
      },
      {
        title: 'Steel Bridge Model — Japanese Standard',
        desc: 'Steel bridge BIM model according to Japanese design standards (JIS), including steel box girder systems, high-strength bolt connections, and welding details.',
        tag: 'Steel Bridge'
      },
      {
        title: 'Road Tunnel BIM Model — Hoang Lien Pass',
        desc: 'BIM model of the cross-mountain road tunnel project through Hoang Lien pass, including tunnel lining, drainage system, lighting, and traffic control. Integrating geological data to analyze underground construction risks.',
        tag: 'Road Tunnel'
      },
      {
        title: 'Townhouse Design — Architectural & Structural Model',
        desc: 'Overall BIM model of a multi-story townhouse, seamlessly integrating architecture, structure, and MEP. Using Revit to generate building permit drawings.',
        tag: 'Architecture'
      },
      {
        title: 'Scan to BIM — BIM Model from Point Cloud Data',
        desc: 'Applying 3D laser scanning to collect existing condition Point Cloud data, converting it into accurate BIM models in Revit. Used for renovation and upgrades.',
        tag: 'Scan to BIM'
      },
      {
        title: 'Irrigation Pumping Station BIM Model',
        desc: 'Full 3D BIM model of an irrigation pumping station, including the pump house, suction chamber, discharge chamber, piping, and electromechanical equipment. Supports design coordination.',
        tag: 'Irrigation'
      },
      {
        title: 'Structural Details of Irrigation Pumping Station',
        desc: 'Detailed structural model inside the pumping station: floor slabs, beams, columns, and reinforced concrete diaphragm walls. Detailed construction drawing export.',
        tag: 'Irrigation'
      },
      {
        title: 'Retaining Wall Model — Complex Interchange',
        desc: 'BIM model of the earth retaining wall system in a complex urban interchange, including corner walls, panel walls, and gravity walls.',
        tag: 'Retaining Wall'
      }
    ],
    ctaTitle: "Need BIM Modeling consultation?",
    ctaDesc: "Contact us to receive a quote and the optimal BIM implementation plan for your project",
    ctaCall: "Call Now",
    ctaEmail: "Send Email"
  },
  zh: {
    title: "BIM 建模服务",
    desc: "为交通、民用和工业基础设施项目构建高精度、全面的 BIM 模型。应用 Revit、Civil 3D、Dynamo 和 Scan to BIM 技术来优化设计、施工和运营管理工作流程。",
    projects: [
      {
        title: '混凝土桥梁 BIM 模型 — 友谊-芝陵高速公路',
        desc: '在友谊-芝陵高速公路上全面实施预应力混凝土桥梁系统的 BIM 模型。该模型包括完整的桩基础、桥墩、桥台、Super T 梁和桥面板，带有用于项目生命周期管理的属性数据。',
        tag: '高速公路'
      },
      {
        title: '河内-海防立交桥',
        desc: '河内-海防高速公路立交桥中复杂桥梁系统的 BIM 建模，具有多层立交，结合了曲线桥和直线桥。BIM 数据支持多学科协调。',
        tag: '立交桥'
      },
      {
        title: '详细钢筋模型 — 河内-海防立交',
        desc: '复杂立交中桥墩、桥台和桥面板的详细 3D 钢筋布置。该模型允许自动生成施工图和钢筋表。',
        tag: '钢筋'
      },
      {
        title: '钢桥模型 — 日本标准',
        desc: '符合日本设计标准 (JIS) 的钢桥 BIM 模型，包括钢箱梁系统、高强度螺栓连接和焊接细节。',
        tag: '钢桥'
      },
      {
        title: '公路隧道 BIM 模型 — 黄连山关',
        desc: '穿过黄连山关的跨山公路隧道项目的 BIM 模型，包括隧道衬砌、排水系统、照明和交通控制。整合地质数据以分析地下施工风险。',
        tag: '公路隧道'
      },
      {
        title: '联排别墅设计 — 建筑与结构模型',
        desc: '多层联排别墅的整体 BIM 模型，无缝集成建筑、结构和 MEP。使用 Revit 生成建筑许可图纸。',
        tag: '建筑'
      },
      {
        title: 'Scan to BIM — 基于点云数据的 BIM 模型',
        desc: '应用 3D 激光扫描收集现有条件的点云数据，将其转换为 Revit 中准确的 BIM 模型。用于翻新和升级。',
        tag: 'Scan to BIM'
      },
      {
        title: '灌溉泵站 BIM 模型',
        desc: '灌溉泵站的完整 3D BIM 模型，包括泵房、吸水室、排水室、管道和机电设备。支持设计协调。',
        tag: '灌溉'
      },
      {
        title: '灌溉泵站结构细节',
        desc: '泵站内部详细的结构模型：楼板、梁、柱和钢筋混凝土连续墙。导出详细施工图。',
        tag: '灌溉'
      },
      {
        title: '挡土墙模型 — 复杂立交',
        desc: '复杂城市立交中挡土墙系统的 BIM 模型，包括角墙、板墙和重力墙。',
        tag: '挡土墙'
      }
    ],
    ctaTitle: "需要 BIM 建模咨询？",
    ctaDesc: "联系我们以获取针对您的项目的报价和最佳 BIM 实施计划",
    ctaCall: "立即致电",
    ctaEmail: "发送邮件"
  },
  ja: {
    title: "BIMモデリングサービス",
    desc: "交通、土木、産業インフラプロジェクト向けの高精度で包括的なBIMモデルの構築。Revit、Civil 3D、Dynamo、Scan to BIMテクノロジーを適用して、設計、施工、および運用管理ワークフローを最適化します。",
    projects: [
      {
        title: 'コンクリート橋梁BIMモデル — Huu Nghi - Chi Lang 高速道路',
        desc: 'Huu Nghi - Chi Lang高速道路のプレストレストコンクリート橋梁システムの包括的なBIM実装。モデルには、プロジェクトのライフサイクル管理のための属性データを備えた、完全な杭基礎、橋脚、橋台、Super T桁、および床版が含まれます。',
        tag: '高速道路'
      },
      {
        title: 'ハノイ - ハイフォンインターチェンジの橋梁',
        desc: 'ハノイ - ハイフォン高速道路インターチェンジの複雑な橋梁システムのBIMモデリング。複数のオーバーパスレベルがあり、曲線橋と直線橋が組み合わされています。BIMデータは多分野の調整をサポートします。',
        tag: 'インターチェンジ'
      },
      {
        title: '詳細鉄筋モデル — ハノイ - ハイフォンインターチェンジ',
        desc: '複雑なインターチェンジの橋脚、橋台、および床版の詳細な3D鉄筋レイアウト。モデルにより、施工図と鉄筋表の自動生成が可能になります。',
        tag: '鉄筋'
      },
      {
        title: '鋼橋モデル — 日本基準',
        desc: '日本の設計基準（JIS）に準拠した鋼橋BIMモデル。鋼箱桁システム、高力ボルト接合、および溶接の詳細を含みます。',
        tag: '鋼橋'
      },
      {
        title: '道路トンネルBIMモデル — Hoang Lien 峠',
        desc: 'Hoang Lien峠を通過する山越え道路トンネルプロジェクトのBIMモデル。トンネル覆工、排水システム、照明、および交通管制を含みます。地質データを統合して、地下建設のリスクを分析します。',
        tag: '道路トンネル'
      },
      {
        title: 'タウンハウス設計 — 建築および構造モデル',
        desc: '多層タウンハウスの全体的なBIMモデル。建築、構造、およびMEPをシームレスに統合します。Revitを使用して建築確認申請用の図面を作成します。',
        tag: '建築'
      },
      {
        title: 'Scan to BIM — 点群データからのBIMモデル',
        desc: '3Dレーザースキャンを適用して既存状態の点群データを収集し、Revitの正確なBIMモデルに変換します。改修やアップグレードに使用されます。',
        tag: 'Scan to BIM'
      },
      {
        title: '灌漑ポンプ場BIMモデル',
        desc: '灌漑ポンプ場の完全な3D BIMモデル。ポンプ室、吸水槽、排水槽、配管、および機電設備を含みます。設計調整をサポートします。',
        tag: '灌漑'
      },
      {
        title: '灌漑ポンプ場の構造詳細',
        desc: 'ポンプ場内部の詳細な構造モデル：床版、梁、柱、および鉄筋コンクリート地中連続壁。詳細な施工図のエクスポート。',
        tag: '灌漑'
      },
      {
        title: '擁壁モデル — 複雑なインターチェンジ',
        desc: '複雑な都市インターチェンジの土留め擁壁システムのBIMモデル。コーナー壁、パネル壁、および重力式擁壁を含みます。',
        tag: '擁壁'
      }
    ],
    ctaTitle: "BIMモデリングの相談が必要ですか？",
    ctaDesc: "お客様のプロジェクトに最適なBIM導入計画とお見積もりについては、お問い合わせください",
    ctaCall: "今すぐ電話",
    ctaEmail: "メールを送信"
  }
};

export default function TabBIMModel() {
  const { lang } = useLanguage();
  const dict = localDict[lang] || localDict.vi;

  return (
    <div className="tab-wrapper">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{background: 'linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(15,52,96,0.9) 100%)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2.5rem 3rem', marginBottom: '2.5rem', color: 'white', position: 'relative', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)'}}>
        <div style={{position: 'absolute', top: '-30%', right: '-10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(237,28,36,0.2) 0%, transparent 70%)', pointerEvents: 'none'}}></div>
        <div style={{position: 'relative', zIndex: 1}}>
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 1 }, visible: { opacity: 1, transition: { staggerChildren: 0.04 } } }} style={{fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '0.5rem'}}>
            <Box size={28} color="var(--primary-green)" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '12px', marginTop: '-4px' }}/>
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
        {dict.projects.map((proj, idx) => {
          const originalProj = [
            { img: 'https://cdn.sanity.io/images/wd53xh69/production/db1cb7c2f087af9bc6f3be24ae434802ee97910d-1821x1470.png', tagColor: 'var(--primary-red)', wide: true },
            { img: 'https://cdn.sanity.io/images/wd53xh69/production/b9db7e55d86baa26e9f4183ebf255a15c2665f49-1677x1039.png', tagColor: 'var(--primary-green)' },
            { img: 'https://cdn.sanity.io/images/wd53xh69/production/7f4b494aa9d3be0b48274154a97b2509941ef80d-1750x1044.png', tagColor: 'var(--primary-red)' },
            { img: 'https://cdn.sanity.io/images/wd53xh69/production/add3b214f92c05191fbed87f31ef5aeb90f647a7-1815x1021.png', tagColor: 'var(--primary-green)' },
            { img: 'https://cdn.sanity.io/images/wd53xh69/production/6596ae138ba7cdd31d8ddd401df42d1953d45f17-2164x1320.png', tagColor: 'var(--primary-red)', wide: true },
            { img: 'https://cdn.sanity.io/images/wd53xh69/production/bcd3d5bc5f4de1ce9aa054a143f02fab99e88558-1891x1304.png', tagColor: 'var(--primary-green)' },
            { img: 'https://cdn.sanity.io/images/wd53xh69/production/0aac285403398b6187e84c4c424d3db607ef8e9e-1891x1196.png', tagColor: 'var(--primary-red)' },
            { img: 'https://cdn.sanity.io/images/wd53xh69/production/2db52113031dcbc472bae458611c5636bc66a5c4-1946x1082.png', tagColor: 'var(--primary-green)' },
            { img: 'https://cdn.sanity.io/images/wd53xh69/production/5800695de7144313f6745620e7c250221d51ec82-1946x1241.png', tagColor: 'var(--primary-red)' },
            { img: 'https://cdn.sanity.io/images/wd53xh69/production/3bebfd9851b50ac5c22b89d25cfa1b2ad5475abd-2192x1213.png', tagColor: 'var(--primary-green)' }
          ][idx];
          return (
          <motion.div 
            key={idx}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.3)", transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
            style={{background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '14px', overflow: 'hidden', cursor: 'pointer', gridColumn: originalProj.wide ? 'span 2' : 'span 1'}}
            className="proj-card-liquid"
          >
            <div style={{position: 'relative', overflow: 'hidden', height: originalProj.wide ? '280px' : '220px'}}>
              <Image src={originalProj.img} alt={proj.title} fill style={{objectFit: 'cover'}} sizes="(max-width: 768px) 100vw, 50vw" />
              <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,30,0.5) 0%, transparent 50%)'}}></div>
              <span style={{position: 'absolute', top: '12px', left: '12px', background: originalProj.tagColor, color: 'white', fontSize: '0.7rem', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', letterSpacing: '1px', textTransform: 'uppercase', boxShadow: '0 4px 10px rgba(0,0,0,0.3)'}}>{proj.tag}</span>
            </div>
            <div style={{padding: '1.5rem'}}>
              <div style={{fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, marginBottom: '0.6rem', color: 'white', lineHeight: 1.3}}>{proj.title}</div>
              <div style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6}}>{proj.desc}</div>
            </div>
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
