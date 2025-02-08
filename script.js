// تفعيل التمرير السلس للروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// تحريك الصور في معرض الصور
const galleryImages = [
    'https://source.unsplash.com/800x600/?russia,university',
    'https://source.unsplash.com/800x600/?russia,education',
    'https://source.unsplash.com/800x600/?russia,students',
    'https://source.unsplash.com/800x600/?russia,campus',
    'https://source.unsplash.com/800x600/?russia,library',
    'https://source.unsplash.com/800x600/?russia,classroom'
];

function loadGallery() {
    const gallery = document.getElementById('imageGallery');
    if (gallery) {
        galleryImages.forEach(image => {
            const col = document.createElement('div');
            col.className = 'col-md-4';
            col.innerHTML = `
                <div class="gallery-item">
                    <img src="${image}" alt="صورة من روسيا" class="img-fluid">
                </div>
            `;
            gallery.appendChild(col);
        });
    }
}

// تفعيل النماذج
document.addEventListener('DOMContentLoaded', function() {
    loadGallery();

    // التعامل مع نموذج الاتصال
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', submitContactForm);
    }

    // تفعيل أزرار الحجز
    const bookingButtons = document.querySelectorAll('.btn-primary');
    bookingButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.includes('حجز')) {
                alert('سيتم تحويلك إلى صفحة الحجز...');
            }
        });
    });

    // تأثير حركي للقائمة عند التحميل
    const navItems = document.querySelectorAll('.nav-item, .nav-contact-item');
    navItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.3s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // تغيير اللغة
    const languageItems = document.querySelectorAll('.dropdown-item[data-lang]');
    const currentLangSpan = document.querySelector('.current-lang');
    
    // تخزين النصوص بجميع اللغات
    const translations = {
        ar: {
            site_title: 'أوتشوبا للدراسة في روسيا',
            tourism_site_title: 'أوتشوبا للسياحة في روسيا',
            brand_name: 'أوتشوبا',
            study_subtitle: 'للدراسة في روسيا',
            tourism_subtitle: 'للسياحة في روسيا',
            study: 'الدراسة',
            tourism: 'السياحة',
            contact: 'اتصل بنا',
            hero_title: 'الدراسة في روسيا',
            hero_subtitle: 'نحن هنا لمساعدتك في تحقيق حلمك بالدراسة في روسيا',
            free_consultation: 'احصل على استشارة مجانية',
            our_services: 'خدماتنا',
            services_subtitle: "نقدم لك خدمات شاملة لضمان تجربة دراسية ناجحة في روسيا",
            registration_admission: "التسجيل والقبول الجامعي",
            registration_text: "نرافقك في رحلة القبول الجامعي خطوة بخطوة",
            reg_feature_1: "اختيار أفضل الجامعات المناسبة",
            reg_feature_2: "تجهيز وتصديق المستندات المطلوبة",
            reg_feature_3: "التقديم للجامعات ومتابعة الطلب",
            learn_more_registration: "تعرف على المزيد",
            translation_services: "خدمات الترجمة المعتمدة",
            translation_text: "نقدم خدمات ترجمة احترافية ومعتمدة لجميع أنواع الوثائق مع ضمان الدقة والسرعة",
            trans_feature_1: "ترجمة معتمدة للوثائق الرسمية",
            trans_feature_2: "تصديق وتوثيق من الجهات المختصة",
            trans_feature_3: "خدمات الترجمة الفورية",
            student_insurance: "التأمين الطلابي الشامل",
            insurance_text: "نوفر تغطية تأمينية شاملة تضمن لك رعاية صحية متكاملة طوال فترة دراستك",
            ins_feature_1: "تغطية طبية شاملة",
            ins_feature_2: "خدمات الطوارئ والمساعدة",
            ins_feature_3: "دعم على مدار الساعة",
            discover_more: "اكتشف المزيد",
            faq: 'الأسئلة الشائعة',
            faq_requirements: 'المتطلبات',
            faq_requirements_summary: 'شهادة الثانوية، جواز السفر، الشهادة الصحية',
            faq_requirement_highschool: 'شهادة الثانوية العامة',
            faq_requirement_passport: 'جواز سفر ساري',
            faq_requirement_health: 'شهادة صحية',
            
            faq_costs: 'التكاليف',
            faq_costs_summary: 'تختلف حسب التخصص والجامعة',
            faq_costs_tuition: 'رسوم دراسية',
            faq_costs_accommodation: 'سكن طلابي',
            faq_costs_living: 'مصاريف معيشة',
            
            faq_duration: 'مدة الدراسة',
            faq_duration_summary: '4-6 سنوات للبكالوريوس',
            faq_duration_bachelor: 'بكالوريوس: 4-6 سنوات',
            faq_duration_master: 'ماجستير: 2 سنة',
            faq_duration_doctorate: 'دكتوراه: 3-4 سنوات',
            
            faq_language: 'اللغة الروسية',
            faq_language_summary: 'دورات مكثفة متوفرة',
            faq_language_courses: 'دورات تحضيرية',
            faq_language_support: 'دعم لغوي مستمر',
            faq_language_programs: 'برامج باللغة الإنجليزية',
            quick_links: 'روابط سريعة',
            footer_description: 'خدمات تعليمية وسياحية في روسيا',
            follow_us: 'تواصل معنا',
            tourism_hero_title: 'اكتشف روسيا',
            tourism_hero_subtitle: 'رحلات سياحية مميزة في أجمل المدن الروسية',
            book_tour: 'احجز رحلتك الآن',
            popular_destinations: 'وجهات سياحية شهيرة',
            discover_places: 'اكتشف أجمل الأماكن في روسيا',
            destinations_description: 'تعرف على أشهر المعالم السياحية والوجهات الساحرة في روسيا',
            moscow: 'موسكو',
            moscow_description: 'عاصمة روسيا النابضة بالحياة والتاريخ',
            saint_petersburg: 'سانت بطرسبرغ',
            petersburg_description: 'مدينة القصور والفن والثقافة',
            kazan: 'كازان',
            kazan_description: 'عاصمة تتارستان التاريخية',
            explore_destination: 'استكشف الوجهة',
            view_all_destinations: 'عرض جميع الوجهات',
            tourism_services: 'خدماتنا السياحية',
            accommodation: 'الإقامة',
            accommodation_text: 'حجوزات فندقية في أفضل الفنادق الروسية',
            guided_tours: 'جولات سياحية',
            guided_tours_text: 'جولات مع مرشدين سياحيين محترفين',
            activities: 'الأنشطة والفعاليات',
            activities_text: 'تذاكر للمتاحف والمسارح والفعاليات',
            tourism_footer_description: 'خدمات سياحية متكاملة في روسيا',
            more: 'المزيد',
            flight_tickets: 'تذاكر الطيران',
            flight_tickets_text: 'حجز تذاكر الطيران مع أفضل شركات الطيران',
            transportation: 'المواصلات',
            transportation_text: 'خدمات النقل والمواصلات داخل روسيا',
            special_offers: 'عروضنا المميزة',
            family_offer: 'عرض العائلة',
            family_offer_text: 'رحلة لمدة 7 أيام تشمل الإقامة والمواصلات',
            honeymoon_offer: 'عرض شهر العسل',
            honeymoon_offer_text: 'باقة رومانسية خاصة لمدة 5 أيام',
            price_starting_from: 'ابتداءً من $999',
            book_now: 'احجز الآن',
            discover_russia: "اكتشف روسيا",
            tourism_title: "رحلة لا تُنسى في روسيا",
            tourism_description: "استكشف جمال روسيا الساحر، من القصور التاريخية إلى المناظر الطبيعية الخلابة",
            destinations: "وجهة سياحية",
            tourists: "سائح سنوياً",
            tours: "رحلة منظمة",
            explore_now: "استكشف الآن",
            book_trip: "احجز رحلتك",
            study_page_title: 'صفحة الدراسة',
            study_page_description: 'استكشف المعلومات والدروس المتاحة للدراسة في روسيا',
            study_hero_title: 'مرحباً بكم في صفحة الدراسة',
            study_hero_subtitle: 'استكشف المعلومات والدروس المتاحة للدراسة في روسيا',
            hero_description: 'احصل على معلومات شاملة حول البرامج الدراسية في روسيا.',
            new_translation_key: 'نص جديد',
            top_universities: 'أفضل الجامعات',
            universities: 'الجامعات',
            students: 'الطلاب',
            programs: 'البرامج',
            learn_more: 'تعلم المزيد',
            contact_us: 'اتصل بنا',
            services_tag: "خدماتنا المتميزة",
            our_services: "حلول متكاملة للدراسة في روسيا",
            services_subtitle: "نقدم مجموعة شاملة من الخدمات المتخصصة لضمان تجربة دراسية ناجحة وسلسة في روسيا",
            registration_admission: "التسجيل والقبول الجامعي",
            registration_text: "نرافقك في رحلة القبول الجامعي خطوة بخطوة، من اختيار الجامعة حتى استلام قبولك",
            translation_services: "خدمات الترجمة المعتمدة",
            translation_text: "نقدم خدمات ترجمة احترافية ومعتمدة لجميع أنواع الوثائق مع ضمان الدقة والسرعة",
            student_insurance: "التأمين الطلابي الشامل",
            insurance_text: "نوفر تغطية تأمينية شاملة تضمن لك رعاية صحية متكاملة طوال فترة دراستك",
            ins_feature_1: "تغطية طبية شاملة",
            ins_feature_2: "خدمات الطوارئ والمساعدة",
            ins_feature_3: "دعم على مدار الساعة",
            discover_more: "اكتشف المزيد",
            process_timeline: 'الجدول الزمني للعملية',
            step_1: 'تقديم الطلب',
            step_1_desc: 'تقديم جميع المستندات المطلوبة',
            step_2: 'المراجعة والتدقيق',
            step_2_desc: 'مراجعة المستندات والتحقق من صحتها',
            step_3: 'الموافقة النهائية',
            step_3_desc: 'استلام خطاب القبول والموافقة النهائية',
            requirements: 'المتطلبات',
            documents: 'المستندات المطلوبة',
            passport: 'جواز سفر ساري المفعول',
            certificates: 'الشهادات الدراسية',
            photos: 'صور شخصية حديثة',
            language: 'متطلبات اللغة',
            russian_level: 'مستوى مقبول في اللغة الروسية',
            english_level: 'مستوى مقبول في اللغة الإنجليزية',
            document_translation: 'ترجمة الوثائق',
            academic_docs: 'الوثائق الأكاديمية',
            personal_docs: 'الوثائق الشخصية',
            legal_docs: 'الوثائق القانونية',
            certification: 'التصديق',
            notary: 'تصديق كاتب العدل',
            embassy: 'تصديق السفارة',
            quality_assurance: 'ضمان الجودة',
            expert_translators: 'مترجمون خبراء',
            expert_desc: 'فريق من المترجمين المحترفين والمعتمدين',
            quick_service: 'خدمة سريعة',
            quick_desc: 'تسليم سريع مع الحفاظ على الجودة',
            accuracy: 'دقة عالية',
            accuracy_desc: 'ترجمة دقيقة وموثوقة',
            coverage_details: 'تفاصيل التغطية',
            medical_coverage: 'التغطية الطبية',
            emergency: 'حالات الطوارئ',
            hospitalization: 'العلاج في المستشفى',
            dental_coverage: 'تغطية الأسنان',
            basic_dental: 'علاج الأسنان الأساسي',
            emergency_dental: 'حالات طوارئ الأسنان',
            features: 'المميزات',
            worldwide: 'تغطية عالمية',
            worldwide_desc: 'تغطية في جميع أنحاء روسيا',
            support: 'دعم على مدار الساعة',
            support_desc: 'مساعدة فورية عند الحاجة',
            services_subtitle: "خدماتنا",
            services_title: "حلول متكاملة للدراسة في روسيا",
            most_requested: "الأكثر طلباً",
            certified_translation: "ترجمة معتمدة",
            guaranteed_housing: "سكن مضمون",
            registration_title: "التسجيل الجامعي",
            registration_description: "نساعدك في اختيار الجامعة المناسبة وإكمال إجراءات القبول بكل سهولة ويسر",
            registration_feature1: "اختيار أفضل الجامعات",
            registration_feature2: "تجهيز وتصديق الأوراق",
            registration_feature3: "متابعة إجراءات القبول",
            translation_title: "خدمات الترجمة",
            translation_description: "نقدم خدمات ترجمة معتمدة ودقيقة لجميع المستندات والوثائق المطلوبة",
            translation_feature1: "ترجمة معتمدة للشهادات",
            translation_feature2: "ترجمة الوثائق الرسمية",
            translation_feature3: "خدمة سريعة ودقيقة",
            housing_title: "خدمة السكن",
            housing_description: "نؤمن لك السكن المناسب في السكن الجامعي أو الشقق الخاصة بأفضل الأسعار",
            housing_feature1: "سكن جامعي آمن",
            housing_feature2: "شقق مفروشة راقية",
            housing_feature3: "مواقع استراتيجية",
            request_service: "طلب الخدمة",
            
            // ترجمات قسم التأمين الطبي
            insurance_subtitle: "التأمين الطبي",
            insurance_title: "خدمات التأمين الطبي للطلاب",
            insurance_coverage: "خدمات التأمين المتوفرة",
            insurance_description: "نقدم لطلابنا خدمات التأمين الطبي الأساسية في روسيا، تشمل الخدمات الطبية والعلاجية الضرورية",
            hospital_coverage: "الرعاية الطبية",
            hospital_coverage_desc: "تغطية العلاج في المستشفيات المعتمدة",
            dental_coverage: "علاج الأسنان",
            dental_coverage_desc: "تغطية علاجات الأسنان الأساسية",
            insurance_type: "تأمين طبي أساسي",
            card_coverage: "تغطية محلية",
            coverage_amount: "تغطية حتى 500,000 روبل",
            support_247: "دعم طبي",
            local_coverage: "تغطية في روسيا",
            emergency_service: "خدمة الطوارئ",
            request_insurance: "استفسر عن التأمين",
            
            // ترجمات قسم الترجمة
            translation_subtitle: "خدمات الترجمة",
            translation_title: "خدمات ترجمة احترافية",
            translation_description: "نقدم خدمات ترجمة احترافية ودقيقة بمختلف المجالات مع ضمان الجودة والسرعة في التنفيذ",
            
            // الترجمة القانونية
            legal_translation: "الترجمة القانونية",
            legal_translation_desc: "ترجمة معتمدة للوثائق القانونية والرسمية مع ختم وتصديق",
            legal_docs: "وثائق قانونية",
            official_docs: "مستندات رسمية",
            certified_translation: "ترجمة معتمدة",
            
            // الترجمة الأكاديمية
            academic_translation: "الترجمة الأكاديمية",
            academic_translation_desc: "ترجمة دقيقة للأبحاث والوثائق الأكاديمية",
            research_papers: "أوراق بحثية",
            academic_docs: "وثائق أكاديمية",
            thesis_translation: "ترجمة رسائل علمية",
            
            // الترجمة التجارية
            business_translation: "الترجمة التجارية",
            business_translation_desc: "ترجمة احترافية للوثائق والعقود التجارية",
            contracts: "عقود تجارية",
            business_docs: "مستندات شركات",
            marketing_materials: "مواد تسويقية",
            
            // الترجمة الفورية
            interpretation: "الترجمة الفورية",
            interpretation_desc: "خدمات ترجمة فورية للمؤتمرات واللقاءات",
            conferences: "مؤتمرات",
            meetings: "لقاءات عمل",
            events: "فعاليات",
            
            request_translation: "طلب خدمة الترجمة",
            
            // ترجمات قسم الأسئلة الشائعة
            faq_subtitle: "الأسئلة الشائعة",
            faq_title: "كل ما تريد معرفته عن الدراسة في روسيا",
            faq_description: "إليك أهم الأسئلة التي يطرحها الطلاب حول الدراسة في روسيا",
            
            faq_q1: "ما هي متطلبات القبول في الجامعات الروسية؟",
            faq_a1: "تشمل المتطلبات الأساسية:\n• شهادة الثانوية العامة مصدقة\n• جواز سفر ساري المفعول\n• شهادة صحية\n• صور شخصية حديثة\n• ترجمة جميع المستندات للغة الروسية",
            
            faq_q2: "كم تستغرق مدة الدراسة في روسيا؟",
            faq_a2: "تختلف مدة الدراسة حسب التخصص والمرحلة:\n• البكالوريوس: 4-6 سنوات\n• الماجستير: 2 سنة\n• الدكتوراه: 3-4 سنوات\n• السنة التحضيرية: سنة واحدة",
            
            faq_q3: "ما هي تكاليف الدراسة والمعيشة في روسيا؟",
            faq_a3: "تعتبر تكاليف الدراسة في روسيا معقولة مقارنة بالدول الأخرى:\n• الرسوم الدراسية: تبدأ من 2000 دولار سنوياً\n• السكن الجامعي: 100-200 دولار شهرياً\n• المصروفات الشهرية: 300-500 دولار\n• التأمين الصحي: حوالي 200 دولار سنوياً",
            
            faq_q4: "هل يجب أن أتعلم اللغة الروسية قبل الدراسة؟",
            faq_a4: "نعم، معرفة اللغة الروسية مهمة للدراسة في روسيا:\n• يمكنك الالتحاق بالسنة التحضيرية لتعلم اللغة\n• بعض البرامج متوفرة باللغة الإنجليزية\n• مستوى B2 مطلوب للدراسة باللغة الروسية\n• نقدم دورات مكثفة للغة الروسية",
            
            faq_q5: "هل الشهادات الروسية معترف بها دولياً؟",
            faq_a5: "نعم، الشهادات الروسية معترف بها دولياً:\n• معترف بها في معظم دول العالم\n• الجامعات الروسية مصنفة عالمياً\n• يمكن معادلة الشهادة في بلدك\n• فرص عمل واسعة للخريجين",
            
            // ترجمات قسم خطوات التسجيل
            reg_steps_subtitle: "خطوات التسجيل",
            reg_steps_title: "كيف تبدأ رحلة دراستك في روسيا",
            reg_steps_description: "خطوات بسيطة تفصلك عن تحقيق حلمك في الدراسة بروسيا",
            
            step1_title: "تجهيز المستندات",
            step1_desc: "جهز مستنداتك الأساسية: الشهادة الثانوية، جواز السفر، والصور الشخصية",
            step1_detail1: "شهادة الثانوية العامة مصدقة",
            step1_detail2: "صورة جواز السفر",
            step1_detail3: "6 صور شخصية حديثة",
            step1_detail4: "شهادة صحية معتمدة",
            
            step2_title: "اختيار الجامعة والتخصص",
            step2_desc: "نساعدك في اختيار أفضل جامعة وتخصص يناسب طموحاتك",
            step2_detail1: "تحديد التخصص المناسب",
            step2_detail2: "اختيار الجامعة المناسبة",
            step2_detail3: "مراجعة متطلبات القبول",
            step2_detail4: "تقييم التكاليف والمنح",
            
            step3_title: "تقييم مستوى اللغة",
            step3_desc: "تحديد مستوى لغتك الروسية وتحديد الدورة المناسبة",
            step3_detail1: "اختبار تحديد المستوى",
            step3_detail2: "تحديد الدورة المناسبة",
            step3_detail3: "خطة تعلم شخصية",
            step3_detail4: "متابعة التقدم",
            
            step4_title: "إجراءات السفر والإقامة",
            step4_desc: "نساعدك في إنهاء إجراءات التأشيرة والسكن",
            step4_detail1: "استخراج التأشيرة",
            step4_detail2: "حجز السكن",
            step4_detail3: "تأمين صحي شامل",
            step4_detail4: "خدمة الاستقبال",
            
            start_registration: "ابدأ رحلة دراستك الآن",
            registration_note: "نقدم استشارة مجانية لمساعدتك في اتخاذ القرار المناسب",
        },
        en: {
            site_title: 'Uchoba Study in Russia',
            tourism_site_title: 'Uchoba Tourism in Russia',
            brand_name: 'Uchoba',
            study_subtitle: 'Study in Russia',
            tourism_subtitle: 'Tourism in Russia',
            study: 'Study',
            tourism: 'Tourism',
            contact: 'Contact Us',
            hero_title: 'Study in Russia',
            hero_subtitle: 'We are here to help you achieve your dream of studying in Russia',
            free_consultation: 'Get Free Consultation',
            our_services: 'Our Services',
            services_subtitle: "We provide comprehensive services to ensure a successful study experience in Russia",
            registration_admission: "University Registration & Admission",
            registration_text: "We guide you through every step of your admission journey",
            reg_feature_1: "Selection of best suitable universities",
            reg_feature_2: "Document preparation and certification",
            reg_feature_3: "Application submission and follow-up",
            learn_more_registration: "Learn More",
            translation_services: "Certified Translation Services",
            translation_text: "Professional and certified translation services for all types of documents with guaranteed accuracy and speed",
            trans_feature_1: "Certified document translation",
            trans_feature_2: "Official authentication and verification",
            trans_feature_3: "Interpretation services",
            student_insurance: "Comprehensive Student Insurance",
            insurance_text: "We provide comprehensive insurance coverage ensuring complete healthcare throughout your study period",
            ins_feature_1: "Comprehensive medical coverage",
            ins_feature_2: "Emergency and assistance services",
            ins_feature_3: "24/7 support",
            discover_more: "Discover More",
            faq: 'Frequently Asked Questions',
            faq_requirements: 'Requirements',
            faq_requirements_summary: 'High School Certificate, Passport, Health Certificate',
            faq_requirement_highschool: 'High School Certificate',
            faq_requirement_passport: 'Valid Passport',
            faq_requirement_health: 'Health Certificate',
            
            faq_costs: 'Costs',
            faq_costs_summary: 'Varies by Specialization and University',
            faq_costs_tuition: 'Tuition Fees',
            faq_costs_accommodation: 'Student Housing',
            faq_costs_living: 'Living Expenses',
            
            faq_duration: 'Study Duration',
            faq_duration_summary: '4-6 Years for Bachelor\'s',
            faq_duration_bachelor: 'Bachelor\'s: 4-6 Years',
            faq_duration_master: 'Master\'s: 2 Years',
            faq_duration_doctorate: 'Doctorate: 3-4 Years',
            
            faq_language: 'Russian Language',
            faq_language_summary: 'Intensive Courses Available',
            faq_language_courses: 'Preparatory Courses',
            faq_language_support: 'Continuous Language Support',
            faq_language_programs: 'English Programs Available',
            quick_links: 'Quick Links',
            footer_description: 'Educational and tourism services in Russia',
            follow_us: 'Follow Us',
            tourism_hero_title: 'Discover Russia',
            tourism_hero_subtitle: 'Exceptional tours in the most beautiful Russian cities',
            book_tour: 'Book Your Tour Now',
            popular_destinations: 'Popular Destinations',
            discover_places: 'Discover Beautiful Places in Russia',
            destinations_description: 'Explore famous landmarks and enchanting destinations in Russia',
            moscow: 'Moscow',
            moscow_description: 'Russia\'s vibrant and historic capital',
            saint_petersburg: 'Saint Petersburg',
            petersburg_description: 'City of palaces, art, and culture',
            kazan: 'Kazan',
            kazan_description: 'Historic capital of Tatarstan',
            explore_destination: 'Explore Destination',
            view_all_destinations: 'View All Destinations',
            tourism_services: 'Our Tourism Services',
            accommodation: 'Accommodation',
            accommodation_text: 'Hotel bookings in the best Russian hotels',
            guided_tours: 'Guided Tours',
            guided_tours_text: 'Tours with professional tour guides',
            activities: 'Activities & Events',
            activities_text: 'Tickets for museums, theaters, and events',
            tourism_footer_description: 'Comprehensive tourism services in Russia',
            more: 'More',
            flight_tickets: 'Flight Tickets',
            flight_tickets_text: 'Book flights with the best airlines',
            transportation: 'Transportation',
            transportation_text: 'Transportation services within Russia',
            special_offers: 'Special Offers',
            family_offer: 'Family Package',
            family_offer_text: '7-day trip including accommodation and transportation',
            honeymoon_offer: 'Honeymoon Package',
            honeymoon_offer_text: 'Special 5-day romantic package',
            price_starting_from: 'Starting from $999',
            book_now: 'Book Now',
            discover_russia: "Discover Russia",
            tourism_title: "Unforgettable Journey in Russia",
            tourism_description: "Explore Russia's enchanting beauty, from historic palaces to breathtaking landscapes",
            destinations: "Destinations",
            tourists: "Annual Tourists",
            tours: "Organized Tours",
            explore_now: "Explore Now",
            book_trip: "Book Your Trip",
            study_page_title: 'Study Page',
            study_page_description: 'Explore the available information and lessons for studying in Russia',
            study_hero_title: 'Welcome to the Study Page',
            study_hero_subtitle: 'Explore the available information and lessons for studying in Russia',
            hero_description: 'Get comprehensive information about study programs in Russia.',
            new_translation_key: 'New Text',
            top_universities: 'Top Universities',
            universities: 'Universities',
            students: 'Students',
            programs: 'Programs',
            learn_more: 'Learn More',
            contact_us: 'Contact Us',
            services_tag: "Our Distinguished Services",
            our_services: "Comprehensive Solutions for Studying in Russia",
            services_subtitle: "We provide a comprehensive range of specialized services to ensure a successful and smooth study experience in Russia",
            registration_admission: "University Registration & Admission",
            registration_text: "We accompany you on your university admission journey step by step, from choosing a university to receiving your acceptance",
            translation_services: "Certified Translation Services",
            translation_text: "We provide professional and certified translation services for all types of documents with guaranteed accuracy and speed",
            student_insurance: "Comprehensive Student Insurance",
            insurance_text: "We provide comprehensive insurance coverage ensuring complete healthcare throughout your study period",
            ins_feature_1: "Comprehensive medical coverage",
            ins_feature_2: "Accommodation and travel assistance",
            ins_feature_3: "24-hour support",
            discover_more: "Discover More",
            process_timeline: 'Process Timeline',
            step_1: 'Application Submission',
            step_1_desc: 'Submit all required documents and forms',
            step_2: 'Review and Verification',
            step_2_desc: 'Document review and verification process',
            step_3: 'Final Approval',
            step_3_desc: 'Receive acceptance letter and final approval',
            requirements: 'Requirements',
            documents: 'Required Documents',
            passport: 'Valid Passport',
            certificates: 'Academic Certificates',
            photos: 'Recent Photos',
            language: 'Language Requirements',
            russian_level: 'Acceptable Russian Language Level',
            english_level: 'Acceptable English Language Level',
            document_translation: 'Document Translation',
            academic_docs: 'Academic Documents',
            personal_docs: 'Personal Documents',
            legal_docs: 'Legal Documents',
            certification: 'Certification',
            notary: 'Notary Certification',
            embassy: 'Embassy Certification',
            quality_assurance: 'Quality Assurance',
            expert_translators: 'Expert Translators',
            expert_desc: 'Team of certified professional translators',
            quick_service: 'Quick Service',
            quick_desc: 'Fast delivery while maintaining quality',
            accuracy: 'High Accuracy',
            accuracy_desc: 'Accurate and reliable translation',
            coverage_details: 'Coverage Details',
            medical_coverage: 'Medical Coverage',
            emergency: 'Emergency Cases',
            hospitalization: 'Hospitalization',
            dental_coverage: 'Dental Coverage',
            basic_dental: 'Basic Dental Treatment',
            emergency_dental: 'Emergency Dental Cases',
            features: 'Features',
            worldwide: 'Worldwide Coverage',
            worldwide_desc: 'Coverage throughout Russia',
            support: 'Continuous Support',
            support_desc: '24/7 support in multiple languages',
            services_subtitle: "Our Services",
            services_title: "Comprehensive Solutions for Studying in Russia",
            most_requested: "Most Requested",
            certified_translation: "Certified Translation",
            guaranteed_housing: "Guaranteed Housing",
            registration_title: "University Registration",
            registration_description: "We help you choose the right university and complete admission procedures with ease",
            registration_feature1: "Choose the best universities",
            registration_feature2: "Document preparation and certification",
            registration_feature3: "Admission process follow-up",
            translation_title: "Translation Services",
            translation_description: "We provide certified and accurate translation for all required documents",
            translation_feature1: "Certified certificate translation",
            translation_feature2: "Official document translation",
            translation_feature3: "Fast and accurate service",
            housing_title: "Housing Service",
            housing_description: "We secure suitable accommodation in university dorms or private apartments at the best prices",
            housing_feature1: "Safe university housing",
            housing_feature2: "Luxury furnished apartments",
            housing_feature3: "Strategic locations",
            request_service: "Request Service",
            
            // Medical Insurance Translations
            insurance_subtitle: "Medical Insurance",
            insurance_title: "Student Medical Insurance Services",
            insurance_coverage: "Available Insurance Services",
            insurance_description: "We provide our students with essential medical insurance services in Russia, covering necessary medical treatments and services",
            hospital_coverage: "Medical Care",
            hospital_coverage_desc: "Coverage for treatment in approved hospitals",
            dental_coverage: "Dental Care",
            dental_coverage_desc: "Coverage for basic dental treatments",
            medicine_coverage: "Medications",
            medicine_coverage_desc: "Coverage for essential medications",
            insurance_type: "Basic Medical Insurance",
            card_coverage: "Local Coverage",
            coverage_amount: "Coverage up to 500,000 Rubles",
            support_247: "Medical Support",
            local_coverage: "Coverage in Russia",
            emergency_service: "Emergency Service",
            request_insurance: "Inquire About Insurance",
            
            // Translation Services Section
            translation_subtitle: "Translation Services",
            translation_title: "Professional Translation Services",
            translation_description: "We provide professional and accurate translation services in various fields with guaranteed quality and fast delivery",
            
            // Legal Translation
            legal_translation: "Legal Translation",
            legal_translation_desc: "Certified translation of legal and official documents with stamp and authentication",
            legal_docs: "Legal Documents",
            official_docs: "Official Documents",
            certified_translation: "Certified Translation",
            
            // Academic Translation
            academic_translation: "Academic Translation",
            academic_translation_desc: "Accurate translation of research papers and academic documents",
            research_papers: "Research Papers",
            academic_docs: "Academic Documents",
            thesis_translation: "Thesis Translation",
            
            // Business Translation
            business_translation: "Business Translation",
            business_translation_desc: "Professional translation of business documents and contracts",
            contracts: "Business Contracts",
            business_docs: "Company Documents",
            marketing_materials: "Marketing Materials",
            
            // Interpretation
            interpretation: "Interpretation Services",
            interpretation_desc: "Interpretation services for conferences and meetings",
            conferences: "Conferences",
            meetings: "Business Meetings",
            events: "Events",
            
            request_translation: "Request Translation Service",
            
            // FAQ Section Translations
            faq_subtitle: "Frequently Asked Questions",
            faq_title: "Everything You Need to Know About Studying in Russia",
            faq_description: "Here are the most common questions students ask about studying in Russia",
            
            faq_q1: "What are the admission requirements for Russian universities?",
            faq_a1: "Basic requirements include:\n• Certified high school diploma\n• Valid passport\n• Health certificate\n• Recent photographs\n• All documents translated to Russian",
            
            faq_q2: "How long does it take to study in Russia?",
            faq_a2: "Study duration varies by program and level:\n• Bachelor's: 4-6 years\n• Master's: 2-3 years\n• PhD: 3-4 years\n• Preparatory year: 1 year",
            
            faq_q3: "What are the study and living costs in Russia?",
            faq_a3: "Costs in Russia are reasonable compared to other countries:\n• Tuition fees: Starting from $2000 per year\n• University housing: $100-200 per month\n• Monthly expenses: $300-500\n• Health insurance: About $200 per year",
            
            faq_q4: "Do I need to learn Russian before studying?",
            faq_a4: "Yes, knowing Russian is important for studying in Russia:\n• You can join the preparatory year to learn the language\n• Some programs are available in English\n• Level B2 is required for studying in Russian\n• We offer intensive Russian language courses",
            
            faq_q5: "Are Russian degrees internationally recognized?",
            faq_a5: "Yes, Russian degrees are internationally recognized:\n• Recognized in most countries worldwide\n• Russian universities are globally ranked\n• You can validate your degree in your country\n• Wide job opportunities for graduates",
            
            // Registration Steps Translations
            reg_steps_subtitle: "Registration Steps",
            reg_steps_title: "How to Start Your Study Journey in Russia",
            reg_steps_description: "Simple steps to achieve your dream of studying in Russia",
            
            step1_title: "Document Preparation",
            step1_desc: "Prepare your essential documents: high school certificate, passport, and photos",
            step1_detail1: "Certified high school certificate",
            step1_detail2: "Passport copy",
            step1_detail3: "6 recent photos",
            step1_detail4: "Certified health certificate",
            
            step2_title: "Choose University & Major",
            step2_desc: "We help you choose the best university and major that suits your ambitions",
            step2_detail1: "Select suitable major",
            step2_detail2: "Choose the right university",
            step2_detail3: "Review admission requirements",
            step2_detail4: "Evaluate costs and scholarships",
            
            step3_title: "Language Assessment",
            step3_desc: "Determine your Russian language level and suitable course",
            step3_detail1: "Level assessment test",
            step3_detail2: "Course selection",
            step3_detail3: "Personal learning plan",
            step3_detail4: "Progress monitoring",
            
            step4_title: "Travel & Accommodation",
            step4_desc: "We assist with visa procedures and accommodation",
            step4_detail1: "Visa processing",
            step4_detail2: "Accommodation booking",
            step4_detail3: "Comprehensive insurance",
            step4_detail4: "Reception service",
            
            start_registration: "Start Your Study Journey Now",
            registration_note: "We offer free consultation to help you make the right decision",
        },
        ru: {
            site_title: 'Учеба в России Отчоба',
            tourism_site_title: 'Туризм в России Отчоба',
            brand_name: 'Учеба',
            study_subtitle: 'Учеба в России',
            tourism_subtitle: 'Туризм в России',
            study: 'Учеба',
            tourism: 'Туризм',
            contact: 'Связаться с нами',
            hero_title: 'Учеба в России',
            hero_subtitle: 'Мы здесь, чтобы помочь вам осуществить мечту об учебе в России',
            free_consultation: 'Получить бесплатную консультацию',
            our_services: 'Наши Услуги',
            services_subtitle: "Мы предоставляем комплексные услуги для успешного обучения в России",
            registration_admission: "Регистрация и Поступление",
            registration_text: "Мы помогаем с процедурами регистрации и поступления в российские университеты",
            reg_feature_1: "Выбор специальности и университета",
            reg_feature_2: "Подготовка и заверение документов",
            reg_feature_3: "Подача заявления и контроль",
            learn_more_registration: "Подробнее",
            translation_services: "Услуги Перевода",
            translation_text: "Сертифицированный перевод всех необходимых документов",
            trans_feature_1: "Заверенный перевод сертификатов и документов",
            trans_feature_2: "Заверение переводов в уполномоченных органах",
            trans_feature_3: "Услуги устного перевода и сопровождения",
            learn_more_translation: "Подробнее",
            student_insurance: "Студенческое Страхование",
            insurance_text: "Услуги медицинского страхования для студентов",
            insurance_feature1: "Полное медицинское страхование на время учебы",
            insurance_feature2: "Покрытие экстренных случаев и лечения",
            insurance_feature3: "Доступ на круглосуточную поддержку",
            learn_more_insurance: "Подробнее",
            faq: 'Часто Задаваемые Вопросы',
            faq_requirements: 'Требования',
            faq_requirements_summary: 'Аттестат, Паспорт, Медицинская Справка',
            faq_requirement_highschool: 'Аттестат о среднем образовании',
            faq_requirement_passport: 'Действующий паспорт',
            faq_requirement_health: 'Медицинская справка',
            
            faq_costs: 'Стоимость',
            faq_costs_summary: 'Зависит от специальности и университета',
            faq_costs_tuition: 'Плата за обучение',
            faq_costs_accommodation: 'Студенческое общежитие',
            faq_costs_living: 'Расходы на проживание',
            
            faq_duration: 'Продолжительность обучения',
            faq_duration_summary: '4-6 лет для бакалавриата',
            faq_duration_bachelor: 'Бакалавриат: 4-6 лет',
            faq_duration_master: 'Магистратура: 2 года',
            faq_duration_doctorate: 'Докторантура: 3-4 года',
            
            faq_language: 'Русский язык',
            faq_language_summary: 'Доступны интенсивные курсы',
            faq_language_courses: 'Подготовительные курсы',
            faq_language_support: 'Постоянная языковая поддержка',
            faq_language_programs: 'Доступны программы на английском',
            quick_links: 'Быстрые ссылки',
            footer_description: 'Образовательные и туристические услуги в России',
            follow_us: 'Подписывайтесь на нас',
            tourism_hero_title: 'Откройте для себя Россию',
            tourism_hero_subtitle: 'Исключительные туры по красивейшим городам России',
            book_tour: 'Забронировать тур',
            popular_destinations: 'Популярные направления',
            discover_places: 'Откройте для себя красивые места России',
            destinations_description: 'Исследуйте известные достопримечательности и очаровательные места России',
            moscow: 'Москва',
            moscow_description: 'Яркая и историческая столица России',
            saint_petersburg: 'Санкт-Петербург',
            petersburg_description: 'Город дворцов, искусства и культуры',
            kazan: 'Казань',
            kazan_description: 'Историческая столица Татарстана',
            explore_destination: 'Исследовать направление',
            view_all_destinations: 'Посмотреть все направления',
            tourism_services: 'Наши туристические услуги',
            accommodation: 'Проживание',
            accommodation_text: 'Бронирование в лучших отелях России',
            guided_tours: 'Экскурсии',
            guided_tours_text: 'Туры с профессиональными гидами',
            activities: 'Мероприятия',
            activities_text: 'Билеты в музеи, театры и на мероприятия',
            tourism_footer_description: 'Комплексные туристические услуги в России',
            more: 'Подробнее',
            flight_tickets: 'Авиабилеты',
            flight_tickets_text: 'Бронирование авиабилетов у лучших авиакомпаний',
            transportation: 'Транспорт',
            transportation_text: 'Транспортные услуги по России',
            special_offers: 'Специальные предложения',
            family_offer: 'Семейный пакет',
            family_offer_text: '7-дневная поездка с проживанием и транспортом',
            honeymoon_offer: 'Медовый месяц',
            honeymoon_offer_text: 'Специальный 5-дневный романтический пакет',
            price_starting_from: 'От $999',
            book_now: 'Забронировать',
            discover_russia: "Откройте для себя Россию",
            tourism_title: "Незабываемое путешествие по России",
            tourism_description: "Исследуйте очаровательную красоту России, от исторических дворцов до захватывающих пейзажей",
            destinations: "Направления",
            tourists: "Туристов в год",
            tours: "Организованных туров",
            explore_now: "Исследовать",
            book_trip: "Забронировать",
            study_page_title: 'Страница учебы',
            study_page_description: 'Изучите доступную информацию и уроки для учебы в России',
            study_hero_title: 'Добро пожаловать на страницу учебы',
            study_hero_subtitle: 'Изучите доступную информацию и уроки для учебы в России',
            hero_description: 'Получите полную информацию о учебных программах в России.',
            new_translation_key: 'Новый текст',
            top_universities: 'Топ университеты',
            universities: 'Университеты',
            students: 'Студенты',
            programs: 'Программы',
            learn_more: 'Узнать больше',
            contact_us: 'Связаться с нами',
            services_tag: "Наши Отличительные Услуги",
            our_services: "Комплексные Решения для Обучения в России",
            services_subtitle: "Мы предоставляем полный спектр специализированных услуг для обеспечения успешного и комфортного обучения в России",
            registration_admission: "Регистрация и Поступление в Университет",
            registration_text: "Мы сопровождаем вас в процессе поступления в университет шаг за шагом, от выбора университета до получения подтверждения о зачислении",
            translation_services: "Сертифицированные Услуги Перевода",
            translation_text: "Мы предоставляем профессиональные и сертифицированные услуги перевода всех типов документов с гарантированной точностью и оперативностью",
            student_insurance: "Комплексное Студенческое Страхование",
            insurance_text: "Мы предоставляем комплексное страховое покрытие, обеспечивающее полное медицинское обслуживание на протяжении всего периода обучения",
            ins_feature_1: "Comprehensive medical coverage",
            ins_feature_2: "Accommodation and travel assistance",
            ins_feature_3: "24-hour support",
            discover_more: "Discover More",
            process_timeline: 'График процесса',
            step_1: 'Подача заявки',
            step_1_desc: 'Подача всех необходимых документов и форм',
            step_2: 'Проверка и верификация',
            step_2_desc: 'Проверка и верификация документов',
            step_3: 'Окончательное утверждение',
            step_3_desc: 'Получение письма о принятии и окончательного одобрения',
            requirements: 'Требования',
            documents: 'Необходимые документы',
            passport: 'Действующий паспорт',
            certificates: 'Академические сертификаты',
            photos: 'Недавние фотографии',
            language: 'Языковые требования',
            russian_level: 'Приемлемый уровень русского языка',
            english_level: 'Приемлемый уровень английского языка',
            document_translation: 'Перевод документов',
            academic_docs: 'Академические документы',
            personal_docs: 'Личные документы',
            legal_docs: 'Юридические документы',
            certification: 'Сертификация',
            notary: 'Нотариальное заверение',
            embassy: 'Заверение посольства',
            quality_assurance: 'Гарантия качества',
            expert_translators: 'Эксперты-переводчики',
            expert_desc: 'Команда сертифицированных профессиональных переводчиков',
            quick_service: 'Быстрый сервис',
            quick_desc: 'Быстрая доставка с сохранением качества',
            accuracy: 'Высокая точность',
            accuracy_desc: 'Точный и надежный перевод',
            coverage_details: 'Детали покрытия',
            medical_coverage: 'Медицинское покрытие',
            emergency: 'Экстренные случаи',
            hospitalization: 'Лечение в больнице',
            dental_coverage: 'Стоматологическое покрытие',
            basic_dental: 'Базовое стоматологическое лечение',
            emergency_dental: 'Экстренная стоматологическая помощь',
            features: 'Особенности',
            worldwide: 'Всемирное покрытие',
            worldwide_desc: 'Покрытие по всей России',
            support: 'Постоянная поддержка',
            support_desc: 'Круглосуточная поддержка на нескольких языках',
            services_subtitle: "Наши Услуги",
            services_title: "Комплексные решения для обучения в России",
            most_requested: "Самые востребованные",
            certified_translation: "Сертифицированный перевод",
            guaranteed_housing: "Гарантированное жилье",
            registration_title: "Регистрация в университете",
            registration_description: "Мы помогаем с процедурами регистрации и поступления в российские университеты",
            registration_feature1: "Выбор лучших университетов",
            registration_feature2: "Подготовка и заверение документов",
            registration_feature3: "Подача заявления и контроль",
            translation_title: "Услуги перевода",
            translation_description: "Мы предоставляем сертифицированный и точный перевод всех необходимых документов",
            translation_feature1: "Заверенный перевод сертификатов",
            translation_feature2: "Перевод официальных документов",
            translation_feature3: "Быстрый и точный сервис",
            housing_title: "Услуги по размещению",
            housing_description: "Мы обеспечиваем подходящее жилье в университетских общежитиях или частных квартирах по лучшим ценам",
            housing_feature1: "Безопасное университетское жилье",
            housing_feature2: "Элитные меблированные квартиры",
            housing_feature3: "Стратегическое расположение",
            request_service: "Заказать услугу",
            
            // Переводы для медицинского страхования
            insurance_subtitle: "Медицинское Страхование",
            insurance_title: "Услуги Медицинского Страхования для Студентов",
            insurance_coverage: "Доступные Страховые Услуги",
            insurance_description: "Мы предоставляем нашим студентам базовые услуги медицинского страхования в России, покрывающие необходимое медицинское обслуживание",
            hospital_coverage: "Медицинское Обслуживание",
            hospital_coverage_desc: "Покрытие лечения в одобренных больницах",
            dental_coverage: "Стоматологическая Помощь",
            dental_coverage_desc: "Покрытие базовых стоматологических процедур",
            medicine_coverage: "Медикаменты",
            medicine_coverage_desc: "Покрытие основных медикаментов",
            insurance_type: "Базовое Медицинское Страхование",
            card_coverage: "Локальное Покрытие",
            coverage_amount: "Покрытие до 500 000 рублей",
            support_247: "Медицинская Поддержка",
            local_coverage: "Покрытие в России",
            emergency_service: "Экстренная Служба",
            request_insurance: "Узнать о Страховании",
            
            // Раздел услуг перевода
            translation_subtitle: "Услуги перевода",
            translation_title: "Профессиональные услуги перевода",
            translation_description: "Мы предоставляем профессиональные и точные услуги перевода в различных областях с гарантированным качеством и быстрым выполнением",
            
            // Юридический перевод
            legal_translation: "Юридический перевод",
            legal_translation_desc: "Заверенный перевод юридических и официальных документов с печатью и заверением",
            legal_docs: "Юридические документы",
            official_docs: "Официальные документы",
            certified_translation: "Заверенный перевод",
            
            // Академический перевод
            academic_translation: "Академический перевод",
            academic_translation_desc: "Точный перевод научных работ и академических документов",
            research_papers: "Научные работы",
            academic_docs: "Академические документы",
            thesis_translation: "Перевод диссертаций",
            
            // Деловой перевод
            business_translation: "Деловой перевод",
            business_translation_desc: "Профессиональный перевод деловых документов и контрактов",
            contracts: "Деловые контракты",
            business_docs: "Документы компании",
            marketing_materials: "Маркетинговые материалы",
            
            // Устный перевод
            interpretation: "Устный перевод",
            interpretation_desc: "Услуги устного перевода для конференций и встреч",
            conferences: "Конференции",
            meetings: "Деловые встречи",
            events: "Мероприятия",
            
            request_translation: "Заказать услугу перевода",
            
            // Переводы для раздела FAQ
            faq_subtitle: "Часто Задаваемые Вопросы",
            faq_title: "Всё, что нужно знать об учёбе в России",
            faq_description: "Вот самые распространенные вопросы студентов об обучении в России",
            
            faq_q1: "Каковы требования для поступления в российские университеты?",
            faq_a1: "Основные требования включают:\n• Заверенный аттестат о среднем образовании\n• Действующий паспорт\n• Медицинская справка\n• Недавние фотографии\n• Все документы переведены на русский язык",
            
            faq_q2: "Сколько длится обучение в России?",
            faq_a2: "Продолжительность обучения зависит от программы и уровня:\n• Бакалавриат: 4-6 лет\n• Магистратура: 2-3 года\n• Докторантура: 3-4 года\n• Подготовительный год: 1 год",
            
            faq_q3: "Какова стоимость обучения и проживания в России?",
            faq_a3: "Расходы в России разумны по сравнению с другими странами:\n• Плата за обучение: от 2000$ в год\n• Общежитие: 100-200$ в месяц\n• Ежемесячные расходы: 300-500$\n• Медицинская страховка: около 200$ в год",
            
            faq_q4: "Нужно ли учить русский язык перед началом обучения?",
            faq_a4: "Да, знание русского языка важно для обучения в России:\n• Можно поступить на подготовительный факультет для изучения языка\n• Некоторые программы доступны на английском языке\n• Уровень B2 требуется для обучения на русском языке\n• Мы предлагаем интенсивные курсы русского языка",
            
            faq_q5: "Признаются ли российские дипломы на международном уровне?",
            faq_a5: "Да, российские дипломы признаются на международном уровне:\n• Признаются в большинстве стран мира\n• Российские университеты имеют мировой рейтинг\n• Можно подтвердить диплом в своей стране\n• Широкие возможности трудоустройства для выпускников",
            
            // Переводы для раздела регистрации
            reg_steps_subtitle: "Этапы Регистрации",
            reg_steps_title: "Как Начать Обучение в России",
            reg_steps_description: "Простые шаги к вашей мечте об обучении в России",
            
            step1_title: "Подготовка Документов",
            step1_desc: "Подготовьте необходимые документы: аттестат, паспорт и фотографии",
            step1_detail1: "Заверенный аттестат",
            step1_detail2: "Копия паспорта",
            step1_detail3: "6 недавних фотографий",
            step1_detail4: "Медицинская справка",
            
            step2_title: "Выбор Университета и Специальности",
            step2_desc: "Мы помогаем выбрать лучший университет и специальность",
            step2_detail1: "Выбор специальности",
            step2_detail2: "Выбор университета",
            step2_detail3: "Требования к поступлению",
            step2_detail4: "Оценка стоимости и стипендий",
            
            step3_title: "Оценка Языкового Уровня",
            step3_desc: "Определение уровня русского языка и подходящего курса",
            step3_detail1: "Тест определения уровня",
            step3_detail2: "Выбор курса",
            step3_detail3: "Персональный план обучения",
            step3_detail4: "Мониторинг прогресса",
            
            step4_title: "Проезд и Проживание",
            step4_desc: "Мы помогаем с визой и размещением",
            step4_detail1: "Оформление визы",
            step4_detail2: "Бронирование жилья",
            step4_detail3: "Полная страховка",
            step4_detail4: "Встреча и размещение",
            
            start_registration: "Начните Обучение Сейчас",
            registration_note: "Предлагаем бесплатную консультацию для принятия правильного решения",
        }
    };

    // تحديث اللغة المحددة
    function updateLanguage(lang) {
        // تحديث الزر النشط
        languageItems.forEach(item => {
            if(item.dataset.lang === lang) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // تحديث اللغة المعروضة
        const langNames = {
            ar: 'العربية',
            en: 'English',
            ru: 'Русский'
        };
        currentLangSpan.textContent = langNames[lang];

        // تحديث النصوص في الصفحة
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // تحديث عنوان الصفحة
        document.title = translations[lang].site_title;

        // تحديث اتجاه الصفحة
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;

        // تحديث الـ CSS للاتجاه
        const body = document.body;
        if (lang === 'ar') {
            body.classList.remove('ltr');
            body.classList.add('rtl');
        } else {
            body.classList.remove('rtl');
            body.classList.add('ltr');
        }

        // حفظ اللغة المحددة
        localStorage.setItem('selectedLanguage', lang);
    }

    // تفعيل تغيير اللغة عند النقر
    languageItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const lang = this.dataset.lang;
            updateLanguage(lang);
        });
    });

    // تحميل اللغة المحفوظة
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ar';
    updateLanguage(savedLanguage);

    // إغلاق قائمة الهيدر البرجر عند النقر على رابط
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('#navbarNav');

    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarNav.classList.contains('show')) {
                navbarToggler.click(); // إغلاق القائمة
            }
        });
    });

    // إغلاق قائمة الهيدر البرجر عند النقر في أي مكان خارجها
    document.addEventListener('click', (event) => {
        const isClickInside = navbarNav.contains(event.target) || navbarToggler.contains(event.target);
        if (!isClickInside && navbarNav.classList.contains('show')) {
            navbarToggler.click(); // إغلاق القائمة
        }
    });

    // إغلاق قائمة الهيدر البرجر عند الضغط على ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            navbarToggler.click(); // إغلاق القائمة
        }
    });

    // تعريف عناصر النافذة المنبثقة
    const serviceModal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close-btn');

    // وظيفة عرض النافذة المنبثقة
    function showModal(serviceType) {
        let title = '';
        let content = '';
        
        switch(serviceType) {
            case 'registration':
                title = 'التسجيل والقبول الجامعي';
                content = `
                    <div class="service-details">
                        <img src="images/registration-detail.jpg" alt="تفاصيل التسجيل والقبول">
                        <h3>خطوات التسجيل</h3>
                        <ul>
                            <li>تقديم المستندات المطلوبة</li>
                            <li>مراجعة وتصديق الوثائق</li>
                            <li>التقديم للجامعات المختارة</li>
                            <li>متابعة إجراءات القبول</li>
                        </ul>
                    </div>
                `;
                break;
                
            case 'translation':
                title = 'خدمات الترجمة المعتمدة';
                content = `
                    <div class="service-details">
                        <img src="images/translation-detail.jpg" alt="تفاصيل خدمات الترجمة">
                        <h3>خدمات الترجمة المتوفرة</h3>
                        <ul>
                            <li>ترجمة الوثائق الرسمية</li>
                            <li>ترجمة الشهادات الأكاديمية</li>
                            <li>ترجمة جوازات السفر والهويات</li>
                        </ul>
                    </div>
                `;
                break;
                
            case 'insurance':
                title = 'التأمين الطلابي';
                content = `
                    <div class="service-details">
                        <img src="images/insurance-detail.jpg" alt="تفاصيل التأمين الطلابي">
                        <h3>تغطية التأمين الطلابي</h3>
                        <ul>
                            <li>التغطية الطبية الشاملة</li>
                            <li>تغطية حالات الطوارئ</li>
                            <li>العلاج في المستشفيات</li>
                        </ul>
                    </div>
                `;
                break;
        }
        
        if (modalTitle) modalTitle.textContent = title;
        if (modalBody) modalBody.innerHTML = content;
        if (serviceModal) {
            serviceModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    // وظيفة إغلاق النافذة المنبثقة
    function closeModal() {
        if (serviceModal) {
            serviceModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    // إضافة مستمعات الأحداث عند تحميل الصفحة
    document.addEventListener('DOMContentLoaded', function() {
        // إغلاق النافذة عند النقر على زر الإغلاق
        if (closeBtn) {
            closeBtn.onclick = closeModal;
        }
        
        // إغلاق النافذة عند النقر خارجها
        window.onclick = function(event) {
            if (event.target == serviceModal) {
                closeModal();
            }
        }
        
        // إغلاق النافذة عند الضغط على ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
        
        // إضافة مستمعات الأحداث لأزرار "اكتشف المزيد"
        const buttons = document.querySelectorAll('.service-btn');
        buttons.forEach(button => {
            button.onclick = function() {
                const serviceType = this.closest('.service-card').dataset.service;
                showModal(serviceType);
            }
        });
    });

    // وظائف عرض وإخفاء تفاصيل الخدمات
    function showServiceDetails(serviceType) {
        // إخفاء قائمة الخدمات
        document.getElementById('servicesList').style.display = 'none';
        
        // إظهار قسم التفاصيل
        document.getElementById('serviceDetails').style.display = 'block';
        
        // إخفاء جميع محتويات الخدمات
        document.querySelectorAll('.service-content').forEach(content => {
            content.style.display = 'none';
        });
        
        // إظهار محتوى الخدمة المحددة
        document.getElementById(serviceType + 'Details').style.display = 'block';
        
        // التمرير إلى قسم التفاصيل
        document.getElementById('serviceDetails').scrollIntoView({ behavior: 'smooth' });
    }

    // العودة إلى قائمة الخدمات
    function showServicesList() {
        // إخفاء قسم التفاصيل
        document.getElementById('serviceDetails').style.display = 'none';
        
        // إظهار قائمة الخدمات
        document.getElementById('servicesList').style.display = 'grid';
        
        // التمرير إلى قسم الخدمات
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    }

    // إضافة مستمعات الأحداث لأزرار "عرض التفاصيل" و "العودة إلى الخدمات"
    document.querySelectorAll('.service-details-btn').forEach(button => {
        button.onclick = function() {
            const serviceType = this.dataset.service;
            showServiceDetails(serviceType);
        }
    });

    document.querySelectorAll('.back-to-services').forEach(button => {
        button.onclick = function() {
            showServicesList();
        }
    });

    // تأثيرات التمرير والهيدر
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// ترجمات قسم الخدمات
const translations = {
    ar: {
        services_subtitle: "خدماتنا",
        services_title: "حلول متكاملة للدراسة في روسيا",
        most_requested: "الأكثر طلباً",
        certified_translation: "ترجمة معتمدة",
        guaranteed_housing: "سكن مضمون",
        
        registration_title: "التسجيل الجامعي",
        registration_description: "نساعدك في اختيار الجامعة المناسبة وإكمال إجراءات القبول بكل سهولة ويسر",
        registration_feature1: "اختيار أفضل الجامعات",
        registration_feature2: "تجهيز وتصديق الأوراق",
        registration_feature3: "متابعة إجراءات القبول",
        
        translation_title: "خدمات الترجمة",
        translation_description: "نقدم خدمات ترجمة معتمدة ودقيقة لجميع المستندات والوثائق المطلوبة",
        translation_feature1: "ترجمة معتمدة للشهادات",
        translation_feature2: "ترجمة الوثائق الرسمية",
        translation_feature3: "خدمة سريعة ودقيقة",
        
        housing_title: "خدمة السكن",
        housing_description: "نؤمن لك السكن المناسب في السكن الجامعي أو الشقق الخاصة بأفضل الأسعار",
        housing_feature1: "سكن جامعي آمن",
        housing_feature2: "شقق مفروشة راقية",
        housing_feature3: "مواقع استراتيجية",
        
        request_service: "طلب الخدمة"
    },
    en: {
        services_subtitle: "Our Services",
        services_title: "Comprehensive Solutions for Studying in Russia",
        most_requested: "Most Requested",
        certified_translation: "Certified Translation",
        guaranteed_housing: "Guaranteed Housing",
        
        registration_title: "University Registration",
        registration_description: "We help you choose the right university and complete admission procedures with ease",
        registration_feature1: "Choose the best universities",
        registration_feature2: "Document preparation and certification",
        registration_feature3: "Admission process follow-up",
        
        translation_title: "Translation Services",
        translation_description: "We provide certified and accurate translation for all required documents",
        translation_feature1: "Certified certificate translation",
        translation_feature2: "Official document translation",
        translation_feature3: "Fast and accurate service",
        
        housing_title: "Housing Service",
        housing_description: "We secure suitable accommodation in university dorms or private apartments at the best prices",
        housing_feature1: "Safe university housing",
        housing_feature2: "Luxury furnished apartments",
        housing_feature3: "Strategic locations",
        
        request_service: "Request Service"
    },
    ru: {
        services_subtitle: "Наши Услуги",
        services_title: "Комплексные решения для обучения в России",
        most_requested: "Самые востребованные",
        certified_translation: "Сертифицированный перевод",
        guaranteed_housing: "Гарантированное жилье",
        
        registration_title: "Регистрация в университете",
        registration_description: "Мы помогаем с процедурами регистрации и поступления в российские университеты",
        registration_feature1: "Выбор лучших университетов",
        registration_feature2: "Подготовка и заверение документов",
        registration_feature3: "Подача заявления и контроль",
        
        translation_title: "Услуги перевода",
        translation_description: "Мы предоставляем сертифицированный и точный перевод всех необходимых документов",
        translation_feature1: "Заверенный перевод сертификатов",
        translation_feature2: "Перевод официальных документов",
        translation_feature3: "Быстрый и точный сервис",
        
        housing_title: "Услуги по размещению",
        housing_description: "Мы обеспечиваем подходящее жилье в университетских общежитиях или частных квартирах по лучшим ценам",
        housing_feature1: "Безопасное университетское жилье",
        housing_feature2: "Элитные меблированные квартиры",
        housing_feature3: "Стратегическое расположение",
        
        request_service: "Заказать услугу"
    }
};

// تحديث نص WhatsApp حسب اللغة
function updateWhatsAppText(lang) {
    const registrationLink = document.querySelector('a[href*="التسجيل"]');
    const translationLink = document.querySelector('a[href*="الترجمة"]');
    const housingLink = document.querySelector('a[href*="السكن"]');
    
    const texts = {
        ar: {
            registration: "مرحباً، أرغب في الاستفسار عن خدمة التسجيل الجامعي",
            translation: "مرحباً، أرغب في الاستفسار عن خدمة الترجمة المعتمدة",
            housing: "مرحباً، أرغب في الاستفسار عن خدمة السكن"
        },
        en: {
            registration: "Hello, I would like to inquire about the university registration service",
            translation: "Hello, I would like to inquire about the certified translation service",
            housing: "Hello, I would like to inquire about the housing service"
        },
        ru: {
            registration: "Здравствуйте, я хотел бы узнать об услуге регистрации в университете",
            translation: "Здравствуйте, я хотел бы узнать об услуге сертифицированного перевода",
            housing: "Здравствуйте, я хотел бы узнать об услуге размещения"
        }
    };
    
    if (registrationLink) {
        registrationLink.href = `https://wa.me/79964072422?text=${encodeURIComponent(texts[lang].registration)}`;
    }
    if (translationLink) {
        translationLink.href = `https://wa.me/79964072422?text=${encodeURIComponent(texts[lang].translation)}`;
    }
    if (housingLink) {
        housingLink.href = `https://wa.me/79964072422?text=${encodeURIComponent(texts[lang].housing)}`;
    }
}

// تحديث الترجمات
const newTranslations = {
    ar: {
        ...translations.ar,
        form_success_message: 'سيتم تحويلك إلى الواتساب للتواصل معنا'
    },
    en: {
        ...translations.en,
        form_success_message: 'You will be redirected to WhatsApp to contact us'
    },
    ru: {
        ...translations.ru,
        form_success_message: 'Вы будете перенаправлены в WhatsApp для связи с нами'
    }
};

// دمج الترجمات الجديدة
Object.keys(translations).forEach(lang => {
    translations[lang] = { ...translations[lang], ...newTranslations[lang] };
});

// رقم الواتساب الخاص بالشركة
const WHATSAPP_NUMBER = '79964072422';

// دالة لعرض نافذة التواصل
function showContactModal() {
    const modal = new bootstrap.Modal(document.getElementById('contactModal'));
    modal.show();
}

// دالة لمعالجة نموذج التواصل
function submitContactForm(event) {
    event.preventDefault();
    
    // جمع بيانات النموذج
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        specialization: document.getElementById('specialization').value,
        message: document.getElementById('message').value
    };

    // تجهيز نص الرسالة للواتساب
    const whatsappMessage = `
*طلب تسجيل جديد*%0a
------------------------%0a
*الاسم:* ${formData.name}%0a
*البريد الإلكتروني:* ${formData.email}%0a
*رقم الهاتف:* ${formData.phone}%0a
*التخصص المطلوب:* ${formData.specialization}%0a
*الرسالة:* ${formData.message}%0a
------------------------%0a
تم إرسال الطلب من موقع أوتشوبا`.trim();

    // إنشاء رابط الواتساب
    const whatsappURL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${whatsappMessage}`;

    // إظهار رسالة نجاح
    Swal.fire({
        icon: 'success',
        title: translations[currentLanguage].form_success_title || 'تم الإرسال بنجاح',
        text: translations[currentLanguage].form_success_message || 'سيتم تحويلك إلى الواتساب للتواصل معنا',
        confirmButtonText: translations[currentLanguage].ok || 'حسناً'
    }).then((result) => {
        if (result.isConfirmed) {
            // فتح الواتساب في نافذة جديدة
            window.open(whatsappURL, '_blank');
            
            // إغلاق النافذة المنبثقة
            const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
            modal.hide();

            // إعادة تعيين النموذج
            document.getElementById('contactForm').reset();
        }
    });
}
