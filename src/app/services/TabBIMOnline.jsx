"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlayCircle, FileText, Layers, Video, BookOpen, MonitorPlay, CheckCircle2, Phone, Mail } from 'lucide-react';
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
    title: 'REVIT CẦU ĐƯỜNG ONLINE',
    subtitle: 'Chương trình đào tạo thực chiến từ cơ bản đến nâng cao về mô hình hóa cầu đường với Revit & Dynamo',
    stat1: '16 Bài học',
    stat2: 'Video + File thực hành',
    stat3: 'Online',
    stat4: 'Revit + Dynamo + Civil 3D',
    tagVideo: 'Video',
    tagFile: 'File thực hành',
    tagArticle: 'Bài viết',
    ctaTitle: 'Đăng ký ngay để nhận tư vấn chương trình học phù hợp!',
    ctaDesc: 'Khoá học linh hoạt, hỗ trợ kỹ thuật 1-1 trong suốt quá trình học',
    ctaCall: 'Gọi ngay',
    ctaEmail: 'Gửi Email',
    lessons: [
      'Giới thiệu phần mềm, Xây dựng family cọc khoan nhồi',
      'Xây dựng định hình family trụ cầu',
      'Xây dựng định hình family mố cầu',
      'Xây dựng định hình family dầm Super T',
      'Xây dựng định hình cáp DUL (Dự ứng lực)',
      'Làm quen với Dynamo, Đặt cọc khoan nhồi bằng Dynamo',
      'Đọc dữ liệu tim tuyến từ Civil 3D, Đặt mố trụ cầu bằng Dynamo',
      'Đặt gối cầu bằng Dynamo',
      'Đặt dầm cầu và bản mặt cầu bằng Dynamo',
      'Bố trí cốt thép bằng công cụ Revit (Phần 1)',
      'Bố trí cốt thép bằng công cụ Revit (Phần 2)',
      'Tạo khung tên bản vẽ, DIM, TAG thép, KL thép',
      'Quản lý đối tượng, đường nét, in ấn, Export trong Revit',
      'Vẽ family hố ga',
      'Đưa đúng tọa độ khi chèn file CAD vào Revit',
      'Triển khai cốt thép, trình bày bản vẽ, xuất khối lượng'
    ]
  },
  en: {
    title: 'ONLINE ROAD & BRIDGE REVIT',
    subtitle: 'Practical training program from basic to advanced on road and bridge modeling with Revit & Dynamo',
    stat1: '16 Lessons',
    stat2: 'Video + Practice Files',
    stat3: 'Online',
    stat4: 'Revit + Dynamo + Civil 3D',
    tagVideo: 'Video',
    tagFile: 'Practice File',
    tagArticle: 'Article',
    ctaTitle: 'Register now to receive consultation for a suitable study program!',
    ctaDesc: 'Flexible course, 1-on-1 technical support throughout the learning process',
    ctaCall: 'Call Now',
    ctaEmail: 'Send Email',
    lessons: [
      'Software introduction, Creating bored pile family',
      'Creating bridge pier shape family',
      'Creating bridge abutment shape family',
      'Creating Super T girder shape family',
      'Creating Post-Tensioning (PT) cable shape',
      'Getting familiar with Dynamo, Placing bored piles with Dynamo',
      'Reading alignment data from Civil 3D, Placing bridge abutments with Dynamo',
      'Placing bridge bearings with Dynamo',
      'Placing bridge girders and deck with Dynamo',
      'Rebar detailing with Revit tools (Part 1)',
      'Rebar detailing with Revit tools (Part 2)',
      'Creating title blocks, DIM, Rebar TAG, Rebar Schedule',
      'Managing objects, line weights, printing, Exporting in Revit',
      'Drawing manhole family',
      'Importing CAD files into Revit with correct coordinates',
      'Rebar detailing, drawing presentation, quantity takeoff'
    ]
  },
  zh: {
    title: '在线路桥 REVIT 培训',
    subtitle: '从基础到高级的 Revit & Dynamo 路桥建模实战培训课程',
    stat1: '16 节课',
    stat2: '视频 + 练习文件',
    stat3: '在线',
    stat4: 'Revit + Dynamo + Civil 3D',
    tagVideo: '视频',
    tagFile: '练习文件',
    tagArticle: '文章',
    ctaTitle: '立即注册获取适合的课程咨询！',
    ctaDesc: '灵活的课程，在整个学习过程中提供一对一技术支持',
    ctaCall: '立即致电',
    ctaEmail: '发送邮件',
    lessons: [
      '软件介绍，创建钻孔灌注桩族',
      '创建桥墩形状族',
      '创建桥台形状族',
      '创建 Super T 梁形状族',
      '创建预应力 (PT) 缆索形状',
      '熟悉 Dynamo，使用 Dynamo 放置钻孔灌注桩',
      '从 Civil 3D 读取中心线数据，使用 Dynamo 放置桥台',
      '使用 Dynamo 放置桥梁支座',
      '使用 Dynamo 放置桥梁和桥面板',
      '使用 Revit 工具进行钢筋布置（第 1 部分）',
      '使用 Revit 工具进行钢筋布置（第 2 部分）',
      '创建图框、尺寸标注、钢筋标签、钢筋表',
      '在 Revit 中管理对象、线宽、打印、导出',
      '绘制检查井族',
      '将带有正确坐标的 CAD 文件导入 Revit',
      '钢筋布置、图纸展示、工程量清单提取'
    ]
  },
  ja: {
    title: 'オンライン道路・橋梁 REVIT',
    subtitle: 'RevitとDynamoを用いた道路および橋梁モデリングの基礎から応用までの実践的なトレーニングプログラム',
    stat1: '16 レッスン',
    stat2: 'ビデオ + 練習ファイル',
    stat3: 'オンライン',
    stat4: 'Revit + Dynamo + Civil 3D',
    tagVideo: 'ビデオ',
    tagFile: '練習ファイル',
    tagArticle: '記事',
    ctaTitle: '今すぐ登録して、最適な学習プログラムの相談を受けましょう！',
    ctaDesc: '柔軟なコース、学習プロセス全体での1対1の技術サポート',
    ctaCall: '今すぐ電話',
    ctaEmail: 'メールを送信',
    lessons: [
      'ソフトウェアの紹介、場所打ち杭ファミリの作成',
      '橋脚形状ファミリの作成',
      '橋台形状ファミリの作成',
      'Super T桁形状ファミリの作成',
      'プレストレスト（PT）ケーブル形状の作成',
      'Dynamoに慣れる、Dynamoを使用して場所打ち杭を配置',
      'Civil 3Dから線形データを読み取る、Dynamoを使用して橋台を配置',
      'Dynamoを使用して橋梁支承を配置',
      'Dynamoを使用して橋梁桁と床版を配置',
      'Revitツールを使用した鉄筋の配置（パート1）',
      'Revitツールを使用した鉄筋の配置（パート2）',
      '図面枠、寸法、鉄筋タグ、鉄筋数量表の作成',
      'Revitでのオブジェクト管理、線の太さ、印刷、エクスポート',
      'マンホールファミリの作成',
      '正しい座標を持つCADファイルをRevitにインポート',
      '鉄筋の配置、図面表現、数量の抽出'
    ]
  }
};

export default function TabBIMOnline() {
  const { lang } = useLanguage();
  const dict = localDict[lang] || localDict.vi;

  const lessons = dict.lessons.map((title, idx) => ({
    id: idx + 1,
    title,
    tags: idx < 6 ? [dict.tagVideo, dict.tagFile] : [dict.tagVideo, dict.tagArticle]
  }));
  return (
    <div className="tab-wrapper">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{background: 'linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(15,52,96,0.9) 100%)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2.5rem 3rem', color: 'white', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)'}}>
        <div style={{position: 'absolute', top: '-30%', right: '-10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(237,28,36,0.2) 0%, transparent 70%)', pointerEvents: 'none'}}></div>
        <div style={{position: 'relative', zIndex: 1}}>
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 1 }, visible: { opacity: 1, transition: { staggerChildren: 0.04 } } }} style={{fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '0.5rem'}}>
            <MonitorPlay size={28} color="var(--primary-red)" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '12px', marginTop: '-4px' }}/> 
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
          <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem'}}>{dict.subtitle}</p>
          <div style={{display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)'}}><BookOpen size={16} color="var(--primary-green)"/> <span>{dict.stat1}</span></div>
            <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)'}}><Video size={16} color="var(--primary-red)"/> <span>{dict.stat2}</span></div>
            <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)'}}><MonitorPlay size={16} color="var(--primary-green)"/> <span>{dict.stat3}</span></div>
            <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)'}}><Layers size={16} color="var(--primary-red)"/> <span>{dict.stat4}</span></div>
          </div>
        </div>
      </motion.div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.2rem'}}>
        {lessons.map((lesson, idx) => (
          <motion.div 
            key={lesson.id}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
            whileHover={{ y: -5, scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.3)", transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
            style={{background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1.2rem 1.5rem', borderLeft: `4px solid ${idx % 2 === 0 ? 'var(--primary-red)' : 'var(--primary-green)'}`, display: 'flex', alignItems: 'flex-start', gap: '1rem'}}
          >
            <div style={{width: '38px', height: '38px', borderRadius: '50%', background: `linear-gradient(135deg, ${idx % 2 === 0 ? 'var(--primary-red), #dc2626' : 'var(--primary-green), #16a34a'})`, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, flexShrink: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.2)'}}>
              {lesson.id.toString().padStart(2, '0')}
            </div>
            <div style={{flex: 1}}>
              <div style={{fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.6rem', color: 'white', lineHeight: 1.4}}>{lesson.title}</div>
              <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                {lesson.tags.map(tag => (
                  <span key={tag} style={{display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', padding: '4px 10px', borderRadius: '20px', fontWeight: 600, background: tag === dict.tagVideo ? 'rgba(237,28,36,0.1)' : 'rgba(22,163,74,0.1)', color: tag === dict.tagVideo ? '#ff6b6b' : '#4ade80', border: `1px solid ${tag === dict.tagVideo ? 'rgba(237,28,36,0.2)' : 'rgba(22,163,74,0.2)'}`}}>
                    {tag === dict.tagVideo ? <PlayCircle size={12}/> : <FileText size={12}/>} {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} style={{textAlign: 'center', marginTop: '3.5rem', padding: '3rem', background: 'linear-gradient(135deg, rgba(26,26,46,0.9), rgba(15,52,96,0.9))', backdropFilter: 'blur(10px)', borderRadius: '16px', color: 'white', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3)'}}>
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
