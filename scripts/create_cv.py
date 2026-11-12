from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
pdfmetrics.registerFont(TTFont("DejaVu", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("DejaVuBold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))
pdfmetrics.registerFontFamily("DejaVu",normal="DejaVu",bold="DejaVuBold")
from PIL import Image,ImageDraw,ImageFont
from pathlib import Path
root=Path(__file__).resolve().parent.parent
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameTitle',fontName='DejaVuBold',fontSize=25,leading=30,textColor=HexColor('#172b50'),spaceAfter=8))
styles.add(ParagraphStyle(name='SectionTitle',fontName='DejaVuBold',fontSize=11,leading=16,textColor=HexColor('#255ab8'),spaceBefore=15,spaceAfter=7))
styles['BodyText'].fontName='DejaVu';styles['BodyText'].fontSize=9;styles['BodyText'].leading=14
story=[]
def p(t,style='BodyText'):story.append(Paragraph(t,styles[style]))
p('Aime Nsengiyumva','NameTitle')
p('Full-Stack Web Developer &amp; System Analyst')
p('Kigali, Rwanda | aime200816@gmail.com | github.com/Aime0816')
p('PROFILE','SectionTitle')
p('Full-stack web developer focused on practical applications, responsive interfaces, APIs, database design, and AI integration. Co-founder and company manager at Ishyalabs, coordinating projects and contributing to development. Open to project enquiries, internships, and collaboration.')
p('TECHNICAL SKILLS','SectionTitle')
p('<b>Frontend:</b> React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML, CSS')
p('<b>Backend &amp; data:</b> Node.js, Express, PHP, REST APIs, MySQL, MongoDB')
p('<b>AI &amp; tools:</b> Gemini API, OpenRouter, Git, GitHub, Postman, Vercel, Railway')
p('<b>Practice:</b> Requirements analysis, database design, role-based access, project coordination')
p('EXPERIENCE &amp; COLLABORATION','SectionTitle')
p('<b>Ishyalabs - Co-founder &amp; Company Manager | 2026 - Present</b>')
p('Coordinate project planning, responsibilities, and team communication. Contribute to requirements analysis and development across the team\'s digital services.')
story.append(Spacer(1,7))
p('<b>LinkFy Connect - Software Development Internship | 2026</b>')
p('Practical web development and collaboration using JavaScript, PHP, and MySQL.')
story.append(Spacer(1,7))
p('<b>Umurava &amp; Frontiers - Hackathon Participant | 2026</b>')
p('Collaborative prototyping with web technologies and generative AI, from defining problems to presenting solutions.')
p('SELECTED PROJECTS','SectionTitle')
for name,desc in [('IDBK Chat','Community messaging project with group conversations and announcements. React, TypeScript, Express. In development.'),('The Quiz','Interactive team quiz project for group events, with question rounds and score tracking. React, JavaScript.'),('CivicLens AI','Prototype for turning infrastructure photos and descriptions into structured reports using Gemini. Next.js, Node.js, MongoDB.'),('MaternalHub','Collaborative maternal-health project exploring access to pregnancy information and care-related workflows. React.')]:
 p('<b>'+name+'</b> - '+desc);story.append(Spacer(1,6))
SimpleDocTemplate(str(root/'public/Aime-Nsengiyumva-CV.pdf'),rightMargin=45,leftMargin=45,topMargin=40,bottomMargin=40,title='Aime Nsengiyumva - CV',author='Aime Nsengiyumva').build(story)
im=Image.new('RGB',(1200,630),'#090b10');d=ImageDraw.Draw(im)
font='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
for text,xy,size,color in [('AIME NSENGIYUMVA',(70,65),24,'#a8b8d4'),('Ideas into code.',(65,175),72,'#ffffff'),('Code into impact.',(65,265),72,'#7fa7ff'),('Full-Stack Web Developer & System Analyst',(70,420),28,'#b8c6df'),('Kigali, Rwanda  /  Ishyalabs Co-founder',(70,495),23,'#8294b1')]:d.text(xy,text,font=ImageFont.truetype(font,size),fill=color)
im.save(root/'public/social-preview.png')
# Optimize the supplied portrait without changing its content.
photo=Image.open(root/'src/assets/images/Me.png');photo.thumbnail((800,1000));photo.convert('RGB').save(root/'public/images/aime.webp',quality=88)
