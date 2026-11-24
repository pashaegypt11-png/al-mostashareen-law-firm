import type { Locale } from "@/lib/i18n";

export type FaqItem = {
  q: string;
  a: string;
};

export type FaqData = Record<string, Record<Locale, readonly FaqItem[]>>;

export const faqs: FaqData = {
  "civil-litigation": {
    ar: [
      { q: "ما هي الدعاوى المدنية التي يمكن رفعها؟", a: "تشمل القضايا المدنية المنازعات المتعلقة بالحقوق والمطالبات المالية والتعويضات والملكية والالتزامات التعاقدية وغيرها من الحقوق ذات الصفة المدنية. ويعتمد تحديد نوع الدعوى على طبيعة النزاع والمستندات المتاحة، ويمكن مراجعتها في استشارة قانونية." },
      { q: "ما المستندات التي ينبغي إحضارها لأول لقاء؟", a: "يفضل إحضار العقود والمراسلات والفواتير والإخطارات وأي مستندات أو صور تتصل بالموقف، إلى جانب بيان زمني مختصر للأحداث. تساعد هذه الأوراق على فهم النزاع ورفع أي نقص في صورة الواقعة منذ البداية." },
      { q: "هل يمكن تسوية النزاع قبل اللجوء إلى المحكمة؟", a: "يمكن في كثير من الحالات البحث عن تسوية ودية بالمفاوضة أو التفاوض أو الإشعار أو اتفاق التسوية إذا كان الطرف الآخر مستعدًا. يختلف مناسبها بحسب طبيعة النزاع وموقف الأطراف، وبناءً عليه نوضح الخيارات العملية." },
      { q: "هل يمكن للمحامي تمثيلي في النزاع المدني؟", a: "نعم، يمكن للمحامي إعداد مطالبتك ومراجعة المستندات وصياغة الطلبات ومتابعة المراحل والإجراءات ومرافعتك أمام جهات الاختصاص. ولتحديد الطريق الأنسب لنزاعك، يسعدنا أن تواصلنا لحجز استشارة." },
    ],
    en: [
      { q: "What civil disputes can be filed?", a: "Civil disputes may concern financial claims, compensation, ownership, contractual obligations, and other civil rights. The appropriate claim depends on the nature of the dispute and the available documents, which we can review during a consultation." },
      { q: "What documents should I bring to the first meeting?", a: "Bring contracts, correspondence, invoices, notices, and any documents or photographs connected with the dispute, together with a brief timeline of events. These records help assess the position and identify what may still be missing." },
      { q: "Can a dispute be settled before court?", a: "Many disputes may be resolved through negotiation, correspondence, or a settlement agreement when the other party is willing to cooperate. The practical option depends on the circumstances, and we can explain the available approaches." },
      { q: "Can a lawyer represent me in a civil dispute?", a: "Yes. A lawyer can review the records, prepare the claim, draft the submissions, follow the proceedings, and represent you before the competent courts. To assess the best approach for your dispute, you can book a consultation." },
    ],
  },
  "criminal-law": {
    ar: [
      { q: "متى يكون من المفيد الاستعانة بمحامٍ جنائي؟", a: "ينصح بالتشاور المبكر إذا كنت طرفًا أو شاهدًا في واقعة قد تؤدي إلى شكوى أو إجراء جنائي. تساعد مراجعة الموقف مبكرًا على فهم الحقوق والإجراءات المتاحة وصياغة الخطوات التالية بصورة مدروسة." },
      { q: "ماذا أفعل إذا تلقيت استدعاء للنيابة؟", a: "احتفظ بنسخة الاستدعاء ولا تتجاهله، ثم راجع بيان الواقعة والمستندات ذات الصلة قبل الحضور. يمكن للمحامي مساعدتك في التوجيه والاستماع إلى الوقائع ومتابعة أوراق الإجراء بما يحفظ حقوقك." },
      { q: "هل يمكن للمحامي حضور التحقيقات نيابة عن المتهم؟", a: "يجوز حضور المحامي في الأحوال والإجراءات التي ينص القانون على سماحها، وقد تختلف التفاصيل بحسب مرحلة القضية وصفة المتهم. نراجع لك الوضع الفعلي ونوضح المستجدات والإجراءات المناسبة." },
      { q: "هل يمكنني معرفة الموقف وخطوات الدفاع قبل اتخاذ قرار؟", a: "نبدأ بمراجعة الأوراق والواقعة والمرحلة الإجرائية، ثم نوضح الخيارات والمسارات الممكنة والآثار العملية المتاحة في حدود ما تسمح به الوقائع. لحجز استشارة وتقييم موقفك، يسعدنا التواصل معكم." },
    ],
    en: [
      { q: "When is it useful to consult a criminal lawyer?", a: "It is wise to seek advice early if you are involved in or witness to a matter that may lead to a complaint or criminal proceedings. Early review helps clarify your rights, the procedure, and the appropriate next steps." },
      { q: "What should I do if I receive a summons?", a: "Keep a copy of the summons, do not ignore it, and review the relevant facts and documents before attending. A lawyer can help you prepare, explain the process, and follow the papers and procedures carefully." },
      { q: "Can a lawyer attend investigation proceedings?", a: "A lawyer may attend according to the stage of the case and the safeguards applicable to the particular procedure. We can review the circumstances and explain the role available at each stage." },
      { q: "Can I understand my position and defense options before deciding?", a: "We begin by reviewing the documents, the facts, and the procedural stage, then explain the possible approaches and practical implications. To assess your position and next steps, you are welcome to book a consultation." },
    ],
  },
  "family-law": {
    ar: [
      { q: "ما القضايا التي يشملها قانون الأحوال الشخصية؟", a: "تشمل أحوال الأسرة قضايا مثل الزواج والطلاق والنفقة والحضانة والزيارة وبعض مسائل الميراث وحيثياتها القانونية. تختلف الإجراءات بحسب نوع الطلب والعلاقة الأسرية، ولذلك تحتاج إلى مراجعة الوقائع والمستندات." },
      { q: "هل أحتاج إلى محامٍ في قضايا الطلاق؟", a: "يساعد المحامي في تنظيم المستندات وصياغة الطلبات والاتفاقات وتحديد المسارات المحتملة والمرافعة أمام جهات الاختصاص. قد يكون اللجوء إليه مفيدًا خاصة عند وجود نزاع أو أطفال أو مطالبات مالية." },
      { q: "كيف يمكن ترتيب مسألة الحضانة أو النفقة؟", a: "تعتمد مناقشة الحضانة والنفقة على الوقائع والأوضاع المعيشية وتوفير المستندات الداعمة، مع مراعاة مصلحة الأطفال في المقام الأول. يمكن عرض أفضل آلية للتصرف بعد مراجعة الحالة بالتفصيل." },
      { q: "هل يمكن تسوية قضية الأحوال الشخصية ودياً؟", a: "يمكن في بعض الحالات التفاوض والتوصل إلى اتفاق مكتوب بشأن حقوق متفق عليها، مع مراجعة أحكامه قبل الاعتماد عليه. لفهم الخيار الأنسب لحالتك والاتفاق على الخطوات، يسعدنا حجز استشارة." },
    ],
    en: [
      { q: "What matters are covered by personal status law?", a: "Personal status matters may include marriage, divorce, maintenance, custody, visitation, and certain inheritance issues. The procedure depends on the request and family circumstances, so the facts and documents should be reviewed." },
      { q: "Do I need a lawyer for divorce proceedings?", a: "A lawyer can organize the documents, prepare requests and agreements, explain possible paths, and represent you before the competent authority. Legal support is particularly useful when there is a dispute, children, or financial claims." },
      { q: "How can custody or maintenance be addressed?", a: "Custody and maintenance depend on the circumstances, living arrangements, supporting documents, and the children's welfare. We can review the situation and explain the practical options for resolving the matter." },
      { q: "Can a personal status matter be settled amicably?", a: "Some matters can be resolved by negotiation and a written agreement covering agreed rights, provided the terms are carefully reviewed before reliance. For advice on the best approach for your family, you can book a consultation." },
    ],
  },
  "administrative-litigation": {
    ar: [
      { q: "أي قرار إداري يمكن الطعن عليه؟", a: "يمكن في الأصل الطعن في القرارات الإدارية النهائية التي تمس حقًا أو مركزًا قانونيًا، بحسب طبيعة القرار ومدى مشروعيته. مراجعة نص القرار وتاريخ صدوره ومستندات القرار تساعد في تحديد الطريق المناسب." },
      { q: "هل يمكن وقف تنفيذ قرار إداري؟", a: "قد يكون هناك مسار لطلب وقف التنفيذ مع الدعوى الأصلية حيث تتحقق الضوابط والإجراءات اللازمة لحالة محددة. نحدد جدوى الطلب بعد مراجعة القرار والمستندات وأثر التنفيذ المحتمل." },
      { q: "هل هناك بدائل قبل رفع الدعوى الإدارية؟", a: "قد يكون من المفيد تقديم تظلم أو اعتراض إداري قبل رفع الدعوى، إذا كان ذلك متاحًا ويخدم النزاع. نوضح التظلم المناسب دون افتراض إجراء واحد مناسب لكل الحالات." },
      { q: "هل يمكن للمحامي متابعة الدعوى الإدارية؟", a: "نعم، يمكن للمحامي مراجعة القرار وصياغة الطلبات وإعداد المذكرات ومتابعة المراحل أمام جهات الاختصاص. لفحص قرارك وتحديد الخيارات المتاحة، يسعدنا حجز استشارة." },
    ],
    en: [
      { q: "Which administrative decisions can be challenged?", a: "An administrative decision may generally be challenged when it is final and affects a legal right or position. Reviewing the decision, its grounds, and the supporting documents is essential to assess the available procedure." },
      { q: "Can implementation of an administrative decision be suspended?", a: "It may be possible to seek suspension alongside the main claim when the relevant conditions and procedure are met. The circumstances and effects of implementation must be reviewed before determining whether to make the request." },
      { q: "Are there options before filing an administrative claim?", a: "A complaint or objection to the administrative authority may be useful before litigation if it is available and suitable for the dispute. We can explain which option fits the particular decision and facts." },
      { q: "Can a lawyer pursue an administrative claim?", a: "Yes. A lawyer can review the decision, prepare the claim and submissions, and follow the proceedings before the competent authority. To assess your decision and available options, you can book a consultation." },
    ],
  },
  "company-formation": {
    ar: [
      { q: "ما أنواع الشركات التي يمكن تأسيسها؟", a: "توجد أنواع متعددة من الشركات تختلف بحسب عدد الشركاء وأصل النشاط ومسؤولية كل طرف وطبيعة التمويل. نساعد في فهم الأنسب من الناحية العملية والقانونية وفق أهداف المشروع." },
      { q: "ما المستندات اللازمة لتأسيس شركة؟", a: "تختلف المستندات بحسب شكل الشركة وحالة الشركاء ونشاط المشروع، وقد تشمل بيانات الهوية والقرارات والعقود والموافقات اللازمة. نعد قائمة واضحة بعد تحديد الشكل والنشاط المقصودين." },
      { q: "هل يمكن ترخيص الشركة وتسجيلها باجراءات متكاملة؟", a: "يمكن تقديم الدعم في إعداد الأوراق ومراجعتها وإتمام الإجراءات اللازمة بحسب نشاط الشركة وطبيعة تأسيسها. نوضح الخطوات والمسؤوليات قبل البدء لتجنب نقص مستندات أو أخطاء." },
      { q: "هل يمكن للمكتب صياغة عقد التأسيس ومراجعة أوضاع الشركة؟", a: "نعم، يمكننا صياغة العقود والأنظمة الداخلية ومراجعة الشروط والقرارات والامتثال وتوضيح الالتزامات القائمة على النشاط. لحجز استشارة وتحديد احتياجات شركتك، يسعدنا التواصل معكم." },
    ],
    en: [
      { q: "What types of companies can be formed?", a: "Several company forms are available, differing in ownership, liability, management, capital, and the nature of the activity. We can explain the practical and legal considerations for each option." },
      { q: "What documents are needed to form a company?", a: "Requirements vary according to the company form, founders, and intended activity. Identity documents, resolutions, agreements, and applicable approvals may be required, and we prepare a clear checklist after confirming the structure." },
      { q: "Can the firm assist with registration and licensing?", a: "Yes. We can help prepare and review documents and coordinate the required procedures based on the company type and activity. We explain the steps and responsibilities before work begins." },
      { q: "Can the firm draft incorporation documents and review company arrangements?", a: "We can draft incorporation documents and internal rules, review agreements and governance arrangements, and explain the resulting obligations. To discuss the needs of your company, you can book a consultation." },
    ],
  },
  "commercial-litigation": {
    ar: [
      { q: "ما المنازعات التجارية التي يمكن تمثيلكم فيها؟", a: "تشمل المنازعات التجارية النزاعات بين التجار والشركات بشأن العقود والمطالبات المالية والمنافسة ومسؤوليات العمل التجاري. يختلف الإجراء بحسب طبيعة العلاقة والمستندات والجهة المختصة." },
      { q: "هل يمكن حل نزاع تجاري خارج المحكمة؟", a: "يمكن البحث في التفاوض والاتفاقات أو الوسائل الودية المناسبة إن كان الطرف الآخر مستعدًا للمشاركة. نراجع العقد والموقف لتحديد ما إذا كانت التسوية العملية مجدية أم لا." },
      { q: "هل تمثلون الشركات والتجار الأفراد؟", a: "نقدم تمثيلاً قانونيًا للشركات والتجار الأفراد في المنازعات التجارية المتاحة أمام الجهات المختصة، بحسب تفاصيل القضية وطبيعة الطرفين. كما يمكن مراجعة المسألة قبل اتخاذ قرار قضائي." },
      { q: "كيف يساعد المحامي في إنهاء نزاع تجاري؟", a: "يمكن للمحامي تقييم العقد والمخاطر وصياغة المطالبات أو التسوية ومتابعة الإجراءات والمرافعة وفق الوقائع. لحجز استشارة ومناقشة النزاع التجاري، يسعدنا التواصل معكم." },
    ],
    en: [
      { q: "What commercial disputes can you handle?", a: "Commercial disputes may involve contracts, financial claims, competition issues, and obligations between companies or traders. The procedure depends on the relationship, records, and competent authority." },
      { q: "Can a commercial dispute be resolved outside court?", a: "Negotiation and settlement agreements may be effective when the other party is willing to participate. We review the contract and circumstances to determine whether an amicable process is practical." },
      { q: "Do you represent companies and individual traders?", a: "We represent companies and individual traders in commercial matters before competent authorities, subject to the facts and position of each party. The matter can also be reviewed before litigation is decided." },
      { q: "How can a lawyer help resolve a commercial dispute?", a: "A lawyer can assess the contract and risks, prepare claims or settlements, and follow proceedings and advocacy according to the facts. To discuss a commercial dispute, you can book a consultation." },
    ],
  },
  "tax-disputes": {
    ar: [
      { q: "ما المنازعات الضريبية التي يمكن متابعتها؟", a: "تشمل المنازعات مراجعة التقديرات والقرارات الضريبية والاعتراضات والتظلمات أمام الجهات المختصة بحسب الوقائع. يبدأ التقييم بمراجعة القرار والنماذج والمستندات المالية ذات الصلة." },
      { q: "ما المستندات التي تساعد في منازعة ضريبية؟", a: "قد تساعد الإقرارات والفواتير والسجلات المحاسبية والمراسلات والقرارات والإشعارات في شرح الموقف الضريبي. نحدد المستندات اللازمة بحسب موضوع النزاع وحالة السجلات." },
      { q: "هل تتعاملون مع الأفراد والشركات؟", a: "نعم، يمكن تقديم الدعم للأفراد والشركات في منازعات الضرائب والمسائل الإجرائية ذات الصلة وفق حالة كل ملف. تختلف طبيعة الإعداد بحسب صفة المكلف ونشاطه وموضوع الاعتراض." },
      { q: "كيف يمكن للمحامي مساعدتي في النزاع الضريبي؟", a: "يمكن للمحامي مراجعة قرار الضريبة وإعداد الاعتراض أو المذكرات ومتابعة الطعون أمام الجهات المختصة. لحجز استشارة وفحص ملفاتكم، يسعدنا التواصل معكم." },
    ],
    en: [
      { q: "What tax disputes can be handled?", a: "Tax disputes may involve assessments, tax decisions, objections, and appeals before competent bodies depending on the facts. Review begins with the decision, forms, and relevant financial records." },
      { q: "What documents help in a tax dispute?", a: "Tax returns, invoices, accounting records, correspondence, decisions, and notices may help explain the tax position. We identify the documents needed according to the issue and available records." },
      { q: "Do you assist individuals and companies?", a: "Yes. We assist individuals and companies with tax disputes and related procedures according to each file. Preparation varies with the taxpayer's status, activity, and the subject of the objection." },
      { q: "How can a lawyer help with a tax dispute?", a: "A lawyer can review the tax decision, prepare objections or submissions, and follow appeals before competent bodies. To discuss the file and available options, you can book a consultation." },
    ],
  },
  "contracts": {
    ar: [
      { q: "هل يمكن صياغة عقد من الصفر؟", a: "نعم، يمكن إعداد عقد جديد وفق الغرض التجاري أو الشخصي والأطراف والحقوق والالتزامات المتفق عليها. نراجع الوقائع ونصوغ شروطًا واضحة تناسب العلاقة المراد تنظيمها." },
      { q: "ما البنود التي يجب مراجعتها قبل التوقيع؟", a: "ينبغي مراجعة أطراف العقد والتزاماته ومدته والمبلغ أو المقابل وآليات التسليم والتنفيذ والتسوية والتعويض والطعن في البنود. كما ينبغي التأكد من مطابقة جميع الملحقات والصياغة للاتفاق الفعلي." },
      { q: "هل يمكن تعديل عقد قائم؟", a: "يمكن إعداد ملحق أو تعديل معين إذا وافق الأطراف وكان التعديل مكتوبًا وموثقًا بالطريقة المناسبة. نراجع العلاقة الأصلية ونقترح صياغة تحافظ على وضوح الحقوق والالتزامات." },
      { q: "متى ينصح بعرض العقد على محامٍ؟", a: "يفضل مراجعة العقد قبل التوقيع وقبل الالتزام بمواعيد أو ضمانات غير قابلة للعكس، خاصة إذا كان له أثر مالي أو تعاقدي مهم. لحجز استشارة ومراجعة عقدك، يسعدنا التواصل معكم." },
    ],
    en: [
      { q: "Can you draft a contract from scratch?", a: "Yes. A contract can be drafted around the intended commercial or personal purpose, the parties, and the agreed rights and obligations. We review the circumstances and prepare clear terms for the relationship." },
      { q: "What should be checked before signing?", a: "Review the parties, obligations, term, consideration, delivery, performance, settlement, remedies, and any restrictive provisions. It is also important to ensure that schedules and amendments reflect the actual agreement." },
      { q: "Can an existing contract be amended?", a: "An amendment or annex may be prepared when the parties agree and the change is recorded and executed appropriately. We review the original relationship and draft clear rights and responsibilities." },
      { q: "When should a contract be reviewed by a lawyer?", a: "It is advisable to review a contract before signing or accepting commitments that may be difficult to reverse, especially where financial or contractual consequences are significant. To review a contract, you can book a consultation." },
    ],
  },
  "real-estate": {
    ar: [
      { q: "ما المستندات المطلوبة عادة في المعاملة العقارية؟", a: "قد يشمل ذلك سند الملكية والسجلات العقارية والهوية وشهادات الصفة والموافقات والعقود والمخططات بحسب نوع المعاملة. نحدد المستندات المناسبة بعد معرفة طبيعة العقار والإجراء المطلوب." },
      { q: "هل يمكن مراجعة عقد شراء أو بيع العقار؟", a: "نعم، يمكن مراجعة العقد والشروط والتزامات الطرفين ومدى وضوح الملكية ونقلها قبل الاعتماد على العقد. تساعد المراجعة في كشف المخاطر وصياغة الأحكام اللازمة بصورة أوضح." },
      { q: "هل يمكن الاستعانة بالمكتب في تسجيل العقار والشهر العقاري؟", a: "يمكن تقديم المساعدة في مراجعة الأوراق وتحديد البيانات والإجراءات المطلوبة ومتابعة خطوات التسجيل والشهر. تختلف المتطلبات بحسب نوع العقار ونوع المعاملة والمستندات المتاحة." },
      { q: "متى ينبغي طلب استشارة عقارية؟", a: "ينصح بطلب الاستشارة قبل دفع أو التوقيع أو نقل ملكية عقار، خاصة إذا كانت المستندات أو الوعود غير مكتملة. لحجز استشارة ومراجعة موقفك العقاري، يسعدنا التواصل معكم." },
    ],
    en: [
      { q: "What documents are usually required for a real estate transaction?", a: "Documents may include title records, property certificates, identity records, capacity documents, approvals, contracts, and plans, depending on the transaction. We identify the appropriate documents after confirming the property and procedure." },
      { q: "Can a purchase or sale contract be reviewed?", a: "Yes. The contract, obligations, title position, transfer terms, and payment arrangements can be reviewed before reliance. This helps identify risks and clarify the required provisions." },
      { q: "Can the firm assist with registration and notarization?", a: "We can help review papers, identify required records and procedures, and follow registration or notarization steps. Requirements vary according to the property and transaction." },
      { q: "When should I seek real estate advice?", a: "It is advisable before payment, signing, or transfer of ownership, particularly if documents or assurances are incomplete. To review your real estate position, you can book a consultation." },
    ],
  },
  "cassation-appeals": {
    ar: [
      { q: "هل إعادة النظر بالنقض تعيد دراسة الوقائع؟", a: "مبدأ النقض يركز غالبًا على سلامة تطبيق القانون والقواعد الإجرائية، ولا يعيد من حيث الأصل إجراء محاكمة كاملة للوقائع. يعتمد تقييم الطعن على الحكم والأسانيد وسبب النقض المطلوب إثباته." },
      { q: "هل يمكن الطعن بالنقض في أي حكم؟", a: "لا يكون الطعن متاحًا في جميع الأحكام أو المراحل، وقد تختلف الشروط والأسباب بحسب طبيعة الدعوى ونوع الحكم وحالتها الإجرائية. مراجعة الحكم وبياناته تحدد جدوى الطعن ومساره." },
      { q: "ما الفرق بين الاعتراض والنقض؟", a: "يختلف الاعتراض بحسب مراتب التقاضي ونطاق إعادة النظر، بينما يختص النقض بمراجعة حكم من منظور قانوني وإجرائي غالبًا. نوضح الفرق في ضوء الحكم ونظام الدعوى قبل تحديد الطريق." },
      { q: "هل يمكن للمحامي إعداد الطعن ومتابعة المرافعة؟", a: "نعم، يمكن للمحامي مراجعة الحكم والمحاضر والدفوع وصياغة أسباب الطعن ومتابعة الإجراءات والمذكرات أمام جهة الاختصاص. لحجز استشارة وفحص الحكم وتحديد الخيارات، يسعدنا التواصل." },
    ],
    en: [
      { q: "Does a cassation appeal re-examine the facts?", a: "Cassation proceedings generally focus on correct application of the law and procedural rules rather than conducting a full new factual trial. The feasibility depends on the judgment, grounds, and records." },
      { q: "Can every judgment be appealed by cassation?", a: "Not every judgment or procedural stage permits cassation, and the conditions vary with the matter and type of ruling. Reviewing the judgment and procedural position is necessary to assess the available route." },
      { q: "What is the difference between an objection and cassation?", a: "Objection routes vary according to the stage and scope of review, while cassation generally examines legal and procedural issues in a judgment. The distinction should be explained against the judgment and case procedure." },
      { q: "Can a lawyer prepare a cassation appeal and represent me?", a: "Yes. A lawyer can review the judgment, records, and pleas, draft the grounds of appeal, and follow submissions before the competent court. To assess a judgment and available options, you can book a consultation." },
    ],
  },
  "constitutional-court": {
    ar: [
      { q: "من يمكنه إثارة الدفع بعدم الدستورية؟", a: "يتطلب إثارة الدفع مسارًا إجرائيًا وضوابط صفة الخصوم والدعوى والاختصاص، ولا يثبت مجرد مصلحة عامة. يراجع المحامي الدعوى والواقعة والنص محل الدفع لتحديد إمكانية المتابعة." },
      { q: "ما أثر حكم المحكمة الدستورية؟", a: "يختلف أثر الحكم بحسب طبيعة النتيجة ومدى إلغاء النص ووصف الحكم التنفيذي في شأنه. نعرض الآثار العملية بعد مراجعة الحكم والنص محل النزاع وملف الدعوى." },
      { q: "هل يلزم وجود نزاع قائم لرفع الدفع؟", a: "يتطلب الدفع بصفة عامة دعوى قائمة وأثرًا عمليًا للنص محل النزاع، وليس مجرد اعتراض نظري على القانون. نراجع الشروط في ضوء الوقائع والدعوى المقامة." },
      { q: "هل يمكن للمحامي إعداد الدفع ومتابعة أمام جهات الاختصاص؟", a: "نعم، يمكن للمحامي مراجعة الدعوى والنص محل الجدل وصياغة الدفع ومتابعة المراحل الإجرائية وفق الضوابط. لحجز استشارة وتقييم الطلب، يسعدنا التواصل معكم." },
    ],
    en: [
      { q: "Who can raise a constitutional challenge?", a: "A constitutional challenge follows specific procedural requirements concerning the parties, case, and jurisdiction. A lawyer should review the proceedings and the challenged provision before advising on the available route." },
      { q: "What is the effect of a constitutional court ruling?", a: "The effect depends on the court's finding and whether a provision is invalidated or interpreted in a particular way. We explain the practical consequence after reviewing the ruling, provision, and file." },
      { q: "Is an existing dispute required to raise the issue?", a: "A constitutional challenge generally requires an existing case and a practical link to the provision at issue, rather than a purely abstract objection. We review the conditions against the facts and proceedings." },
      { q: "Can a lawyer prepare and pursue a constitutional challenge?", a: "Yes. A lawyer can review the case and challenged provision, prepare the issue, and follow the relevant procedure. To discuss whether the challenge is suitable, you can book a consultation." },
    ],
  },
  "legal-consulting": {
    ar: [
      { q: "ماذا يشمل الاستشارة القانونية؟", a: "تشمل الاستشارة تفسير الموقف العام ومراجعة المستندات المتاحة وشرح الخيارات المحتملة وتوضيح الخطوات العملية. يختلف نطاق الاستشارة بحسب طبيعة المسألة والمعلومات المقدمة." },
      { q: "كيف أجهز للاستشارة؟", a: "جهز ملخصًا زمنيًا مختصرًا ونسخًا واضحة من العقود أو المراسلات أو الإخطارات أو القرارات ذات الصلة. تساعد هذه المعلومات على التركيز على السؤال وتمكين المحامي من فهم النقاط المهمة." },
      { q: "هل الاستشارات سرية؟", a: "يُعامل محتوى الاستشارة ومعلوماتها بقدر مناسب من السرية والخصوصية المهنية. ننصح بعدم المشاركة مع جهات لا تتصل بالمكتب إلا من خلال القنوات التي يحددها نظام التواصل." },
      { q: "هل ضمان الاستشارة نتيجة الدعوى؟", a: "لا يمكن لأي استشارة قانونية ضمان نتيجة نزاع مستقبلية، لأن النتيجة قد تتأثر بالوقائع والأدلة والإجراءات. نوضح المخاطر والخيارات، وللحصول على تقييم لمسألتك يمكن حجز استشارة." },
    ],
    en: [
      { q: "What does a legal consultation include?", a: "A consultation generally includes reviewing the background and available documents, explaining the practical options, and outlining possible next steps. The scope depends on the issue and information provided." },
      { q: "How should I prepare?", a: "Prepare a short timeline and clear copies of relevant contracts, correspondence, notices, or decisions. This helps focus the discussion and identify the key facts and documents." },
      { q: "Are consultations confidential?", a: "Consultation information should be treated with appropriate professional confidentiality and privacy. It is also advisable to share sensitive records only through secure channels and on a need-to-know basis." },
      { q: "Does a consultation guarantee the outcome of a case?", a: "No consultation can guarantee the outcome of a future dispute, since results depend on the facts, evidence, and procedures. We explain risks and options, and you can book a consultation to review your matter." },
    ],
  },
};
