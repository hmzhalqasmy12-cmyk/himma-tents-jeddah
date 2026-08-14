/* ----------------------------------------------------
   مؤسسة همة للخيام والمظلات والمقاولات - Main Script
   Interactive Client-side Features & Shopping Cart Logic
---------------------------------------------------- */

// Catalog Products Dataset (Matching uploaded images & business requirements)
const productsData = [
    {
        id: 'bayt-shaar-ext',
        category: 'tents',
        title: 'خيمة عائلية ملكية (بيت شعر خارجي)',
        shortDesc: 'خيمة واسعة ومريحة مصممة للاستخدام في الرحلات والمناسبات والتجمعات، مع عزل 5 طبقات حراري ومائي متطور.',
        fullDesc: 'بيت شعر ملكي خارجي مجهز بأحدث تصاميم الفخامة من قماش الشعر الألماني والتركي الممتاز، مع واجهات زجاجية سكوريت وإضاءات مخفية وأفياش صحية متكاملة.',
        priceText: 'بيع من 139,000 ر.س | إيجار من 350 ر.س/يوم',
        basePrice: 139000,
        rentalDailyPrice: 350,
        rental3DaysPrice: 900,
        rentalWeeklyPrice: 1800,
        isRentalAvailable: true,
        image: './assets/images/bayt_shaar_ext.png',
        sizes: ['4 × 6 متر (سعة 10-15 شخص)', '5 × 8 متر (سعة 20-30 شخص)', '6 × 12 متر (مناسبات كبرى)'],
        features: [
            'سعة تقريبية: 10 - 15 شخصاً',
            'عازل حراري ومائي 100% مع ضمان عدم التسريب',
            'شعر ألماني مقاوم للحريق وعوامل المناخ بجدة',
            'خيارات إيجار: يوم واحد (350 ر.س) - 3 أيام (900 ر.س) - أسبوع (1,800 ر.س)',
            'توصيل وتركيب فوري شامل التجهيز بجدة وحي طيبة'
        ]
    },
    {
        id: 'sandwich-panel',
        category: 'sandwich',
        title: 'غرف وملاحق ساندوتش بانل',
        shortDesc: 'غرف وملاحق ساندوتش بانل بحلول عزل حراري ومائي متطورة ومناسبة للأسطح والمستودعات والمكاتب.',
        fullDesc: 'تصميم وتنفيذ غرف وملاحق ساندوتش بانل عالي الجودة مقاسات مختلفة، مع هياكل حديدية مجلفنة معالجة ضد الصدأ وعزل بولي يوريثان حراري عالي الكثافة.',
        priceText: 'ابتداءً من 18,000 ر.س (بيع وتنفيذ)',
        basePrice: 18000,
        isRentalAvailable: false,
        image: './assets/images/sandwich_panel.png',
        sizes: ['3 × 4 متر (غرفة حارس/سائق)', '4 × 6 متر (ملحق سطح راقي)', '6 × 8 متر (مستودع أو مكتب موقع)'],
        features: [
            'عزل حراري ومائي فائق 100%',
            'صاج جلفانيز مدهون حرارياً بجميع الألوان',
            'تشطيب لوكس داخلي مع إضاءات وأفياش كهربائية',
            'تركيب سريع وتسليم خلال 48 ساعة بجدة'
        ]
    },
    {
        id: 'wpc-wood',
        category: 'wood',
        title: 'بديل خشب للأبواب والأسوار (WPC Cladding)',
        shortDesc: 'تغليف وتلبيس أبواب وبوابات وأسوار خارجية ببديل الخشب الفاخر المقاوم للشمس والحرارة.',
        fullDesc: 'تغطية وتلبيس الواجهات الخارجية ببديل الخشب الفاخر WPC مع ضمان عدم تغير اللون أو التحلل بفعل حرارة الشمس بجدة، بأشكال هندسية راقية.',
        priceText: 'ابتداءً من 10,000 ر.س (حسب الواجهة)',
        basePrice: 10000,
        isRentalAvailable: false,
        image: './assets/images/wpc_gate.png',
        sizes: ['تلبيس بوابة رئيسية 3×3.5م', 'تلبيس واجهة مدخل فيلا', 'سواتر جدارية بديل الخشب بالمتر'],
        features: [
            'مقاوم تماماً للشمس والحرارة الرطوبة',
            'لا يحتاج أي صيانة أو طلاء دوري',
            'تجزيعات وألوان خشبية عصرية فاخرة',
            'ضمان معتمد لمدة 10 سنوات'
        ]
    },
    {
        id: 'screens',
        category: 'screens',
        title: 'سواتر داخلية وخارجية وتغطيات أسوار',
        shortDesc: 'عدد من أشكال السواتر الحديد والقماش والشرائح لتوفير الخصوصية والحماية الكاملة للمنازل.',
        fullDesc: 'تصميم وتنفيذ سواتر حماية الأسوار والمجالس بجميع أنواعها: سواتر شرائح حديد، سواتر مجدولة، وقماش PVDF كوري مقاوم للرياح العالية.',
        priceText: 'بيع ابتداءً من 120 ر.س / م² (أو 100,000 ر.س للمجمعات)',
        basePrice: 120,
        isRentalAvailable: true,
        rentalDailyPrice: 150,
        rental3DaysPrice: 400,
        rentalWeeklyPrice: 850,
        image: './assets/images/screens.png',
        sizes: ['سواتر ارتفاع 2 متر', 'سواتر ارتفاع 3 متر', 'تغليف كامل لأسوار الفلل'],
        features: [
            'خصوصية 100% ورؤية معتمة من الخارج',
            'دهانات نارية حرارية مقاومة للصدأ',
            'مقاومة ممتازة لجميع العوامل الجوية بجدة',
            'خيارات بيع وإيجار مؤقت للفعاليات والمباني'
        ]
    },
    {
        id: 'store-awnings',
        category: 'screens',
        title: 'مظلات متاجر ومحلات وقماش حدائق',
        shortDesc: 'مظلات نص دائرية ومتحركة وثابتة للمحلات والمتاجر ومواقف السيارات بتصاميم إيطالية وكورية.',
        fullDesc: 'مظلات واجهات المحلات التجارية والحدائق والمواقف بمقاسات مختلفة، مع طباعة شعارات المحلات وقماش PVC عالي التظليل.',
        priceText: 'ابتداءً من 190,000 ر.س (للمشاريع) / 1,200 ر.س (مظلة فردية)',
        basePrice: 1200,
        isRentalAvailable: true,
        rentalDailyPrice: 200,
        rental3DaysPrice: 500,
        rentalWeeklyPrice: 1000,
        image: './assets/images/store_awnings.png',
        sizes: ['مظلة متحركة 3×2 متر', 'مظلة ثابتة نص دائرية', 'مظلات مواقف سيارات مزدوجة'],
        features: [
            'تظليل وحماية 100% من أشعة الشمس',
            'قماش PVC كوري وألماني معتمد',
            'هيكل حديدي مجلفن متين ومرن',
            'إمكانية طباعة الهوية والشعار التجاري'
        ]
    },
    {
        id: 'bayt-shaar-int',
        category: 'tents',
        title: 'ديكورات ومجالس بيوت شعر ملكية داخلية',
        shortDesc: 'تجهيز وديكورات بيوت الشعر الملكية من الداخل بأفخم الأقمشة والسجاد والأضواء المخفية والوجار.',
        fullDesc: 'تصميم وتنفيذ الديكورات الداخلية لبيوت الشعر والمجالس الملكية بجدة، مع تكييف مخفي ومشبات رخام وسدو تراثي أو مودرن.',
        priceText: 'حسب التصميم والمساحة (ابتداءً من 45,000 ر.س)',
        basePrice: 45000,
        isRentalAvailable: false,
        image: './assets/images/bayt_shaar_int.png',
        sizes: ['تأثيث مجلس 4×6م', 'تأثيث مجلس ملكي 6×10م', 'تجهيز كامل مع مشب رخام'],
        features: [
            'جلسات ومساند سدو ملكية مريحة جداً',
            'أسقف جبسية مع إضاءة متدرجة وليد خافت',
            'وجار ومشب رخام أو ستانلس ستيل بحرفة عالية',
            'ضمان على التثبيت والديكور 5 سنوات'
        ]
    }
];

// Global Cart State
let shoppingCart = [];
let currentModalProductId = null;
let currentModalQty = 1;
let currentModalMode = 'buy'; // 'buy' or 'rent'
let currentModalRentalPeriod = 'daily'; // 'daily', '3days', 'weekly'

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderCatalog('all');
    calculateCost();
    setupEventListeners();
});

// Render Catalog Grid
function renderCatalog(categoryFilter = 'all') {
    const grid = document.getElementById('catalogGrid');
    if (!grid) return;

    grid.innerHTML = '';

    let filtered = productsData;
    if (categoryFilter === 'rental') {
        filtered = productsData.filter(p => p.isRentalAvailable);
    } else if (categoryFilter !== 'all') {
        filtered = productsData.filter(p => p.category === categoryFilter);
    }

    filtered.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card glass-panel';
        card.innerHTML = `
            <div class="p-img-box" onclick="openProductModal('${product.id}')" aria-label="عرض تفاصيل ${product.title}">
                <img src="${product.image}" alt="${product.title}" loading="lazy" width="400" height="250">
                <span class="p-category-tag">${product.isRentalAvailable ? 'بيع / إيجار' : 'بيع وتنفيذ'}</span>
                <span class="p-price-tag">${product.priceText}</span>
            </div>
            <div class="p-content">
                <h3 class="p-title">${product.title}</h3>
                <p class="p-desc">${product.shortDesc}</p>
                <ul class="p-specs-list">
                    ${product.features.slice(0, 3).map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
                </ul>
                <div class="p-actions">
                    <button onclick="openProductModal('${product.id}')" class="btn btn-gold btn-block">
                        <i class="fas fa-calendar-check"></i> ${product.isRentalAvailable ? 'احجز أو استأجر الآن' : 'التفاصيل وطلب التنفيذ'}
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter Button Click Handler
function filterCatalog(category, btnElement) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    renderCatalog(category);
}

// Open Product Modal
function openProductModal(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    currentModalProductId = productId;
    currentModalQty = 1;
    currentModalMode = product.isRentalAvailable ? 'rent' : 'buy';
    currentModalRentalPeriod = 'daily';

    const modal = document.getElementById('productModal');
    const content = document.getElementById('modalBodyContent');

    content.innerHTML = `
        <div class="m-grid">
            <div>
                <img src="${product.image}" alt="${product.title}" class="m-img">
                <div style="margin-top:16px;" class="badge text-gold">
                    <i class="fas fa-shield-alt"></i> ضمان شامل معتمد من مؤسسة همة
                </div>
            </div>
            <div>
                <h3 class="m-title">${product.title}</h3>
                <p class="m-desc">${product.fullDesc}</p>

                <h4 class="m-spec-title">المواصفات والتفاصيل:</h4>
                <ul class="m-specs-list">
                    ${product.features.map(f => `<li>• ${f}</li>`).join('')}
                </ul>

                <div class="m-options-row">
                    ${product.isRentalAvailable ? `
                        <div class="form-group">
                            <label>اختر خيار الخدمة:</label>
                            <select id="modalModeSelect" class="custom-select" onchange="updateModalPriceDisplay('${product.id}')">
                                <option value="rent" selected>استئجار مؤقت (Rental)</option>
                                <option value="buy">شراء وتمليك كامل (Buy)</option>
                            </select>
                        </div>

                        <div class="form-group" id="rentalPeriodGroup">
                            <label>خيارات مدة الإيجار والأسعار:</label>
                            <select id="rentalPeriodSelect" class="custom-select" onchange="updateModalPriceDisplay('${product.id}')">
                                <option value="daily">يوم واحد (${product.rentalDailyPrice} ر.س)</option>
                                <option value="3days">3 أيام (${product.rental3DaysPrice} ر.س)</option>
                                <option value="weekly">أسبوع كامل (${product.rentalWeeklyPrice} ر.س)</option>
                            </select>
                        </div>
                    ` : ''}

                    <div class="form-group">
                        <label>اختر المقاس أو الحجم المطلوب:</label>
                        <select id="modalSizeSelect" class="custom-select">
                            ${product.sizes.map(s => `<option value="${s}">${s}</option>`).join('')}
                        </select>
                    </div>

                    <div class="form-group" style="display:flex; align-items:center; gap:16px;">
                        <label style="margin:0;">الكمية:</label>
                        <div class="qty-stepper">
                            <button type="button" class="qty-btn" onclick="adjustModalQty(-1)">-</button>
                            <span class="qty-val" id="modalQtyVal">1</span>
                            <button type="button" class="qty-btn" onclick="adjustModalQty(1)">+</button>
                        </div>
                    </div>
                </div>

                <div style="background:rgba(212,175,55,0.1); padding:16px; border-radius:12px; margin-bottom:20px; text-align:center;">
                    <span style="font-size:0.9rem; color:var(--text-secondary);">السعر التقديري المحدد:</span>
                    <div id="modalCalculatedPrice" style="font-size:1.8rem; font-weight:800; color:var(--primary-gold);">
                        ${product.isRentalAvailable ? product.rentalDailyPrice + ' ر.س' : product.basePrice.toLocaleString() + ' ر.س'}
                    </div>
                </div>

                <div style="display:flex; gap:12px; flex-wrap:wrap;">
                    <button class="btn btn-emerald" style="flex:1;" onclick="addCurrentModalToCart()">
                        <i class="fas fa-cart-plus"></i> أضف إلى السلة
                    </button>
                    <button class="btn btn-gold" style="flex:1;" onclick="directModalWhatsApp('${product.id}')">
                        <i class="fab fa-whatsapp"></i> ${product.isRentalAvailable ? 'احجز الخيمة الآن' : 'اطلب المنتَج الآن'}
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }
}

function adjustModalQty(delta) {
    currentModalQty = Math.max(1, currentModalQty + delta);
    const qtySpan = document.getElementById('modalQtyVal');
    if (qtySpan) qtySpan.textContent = currentModalQty;
    updateModalPriceDisplay(currentModalProductId);
}

function updateModalPriceDisplay(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const modeSelect = document.getElementById('modalModeSelect');
    const rentalSelect = document.getElementById('rentalPeriodSelect');
    const rentalGroup = document.getElementById('rentalPeriodGroup');
    const priceDisplay = document.getElementById('modalCalculatedPrice');

    currentModalMode = modeSelect ? modeSelect.value : (product.isRentalAvailable ? 'rent' : 'buy');

    if (rentalGroup) {
        rentalGroup.style.display = currentModalMode === 'rent' ? 'block' : 'none';
    }

    let unitPrice = product.basePrice;

    if (currentModalMode === 'rent' && rentalSelect) {
        currentModalRentalPeriod = rentalSelect.value;
        if (currentModalRentalPeriod === 'daily') unitPrice = product.rentalDailyPrice || 350;
        else if (currentModalRentalPeriod === '3days') unitPrice = product.rental3DaysPrice || 900;
        else if (currentModalRentalPeriod === 'weekly') unitPrice = product.rentalWeeklyPrice || 1800;
    }

    const total = unitPrice * currentModalQty;
    if (priceDisplay) {
        priceDisplay.textContent = total.toLocaleString() + ' ر.س';
    }
}

// Add Item to Shopping Cart
function addCurrentModalToCart() {
    const product = productsData.find(p => p.id === currentModalProductId);
    if (!product) return;

    const sizeSelect = document.getElementById('modalSizeSelect');
    const selectedSize = sizeSelect ? sizeSelect.value : product.sizes[0];

    let unitPrice = product.basePrice;
    let periodText = 'شراء وتمليك';

    if (currentModalMode === 'rent') {
        if (currentModalRentalPeriod === 'daily') { unitPrice = product.rentalDailyPrice; periodText = 'إيجار (يوم واحد)'; }
        else if (currentModalRentalPeriod === '3days') { unitPrice = product.rental3DaysPrice; periodText = 'إيجار (3 أيام)'; }
        else if (currentModalRentalPeriod === 'weekly') { unitPrice = product.rentalWeeklyPrice; periodText = 'إيجار (أسبوع)'; }
    }

    const cartItem = {
        cartId: Date.now().toString(),
        productId: product.id,
        title: product.title,
        image: product.image,
        size: selectedSize,
        mode: currentModalMode,
        periodText: periodText,
        unitPrice: unitPrice,
        qty: currentModalQty,
        totalPrice: unitPrice * currentModalQty
    };

    shoppingCart.push(cartItem);
    updateCartUI();
    closeProductModal();
    showToast(`تمت إضافة "${product.title}" إلى سلة الحجوزات!`);
    toggleCartDrawer(true);
}

// Update Cart Drawer UI
function updateCartUI() {
    const badge = document.getElementById('cartBadgeCount');
    const list = document.getElementById('cartItemsList');
    const subtotalEl = document.getElementById('cartSubtotal');
    const grandTotalEl = document.getElementById('cartGrandTotal');
    const submitBtn = document.getElementById('checkoutSubmitBtn');
    const checkoutForm = document.getElementById('checkoutFormSection');

    const totalCount = shoppingCart.reduce((sum, item) => sum + item.qty, 0);
    if (badge) badge.textContent = totalCount;

    if (shoppingCart.length === 0) {
        if (list) list.innerHTML = '<p class="empty-cart-msg">السلة فارغة حالياً. قم بإضافة منتجات أو خيام من الكتالوج.</p>';
        if (subtotalEl) subtotalEl.textContent = '0 ر.س';
        if (grandTotalEl) grandTotalEl.textContent = '0 ر.س';
        if (submitBtn) submitBtn.disabled = true;
        if (checkoutForm) checkoutForm.style.display = 'none';
        return;
    }

    if (checkoutForm) checkoutForm.style.display = 'block';

    let subtotal = 0;
    if (list) {
        list.innerHTML = '';
        shoppingCart.forEach(item => {
            subtotal += item.totalPrice;
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item-card';
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="ci-thumb">
                <div class="ci-details">
                    <h5 class="ci-title">${item.title}</h5>
                    <div class="ci-price">${item.totalPrice.toLocaleString()} ر.س</div>
                    <div class="ci-meta">${item.periodText} | ${item.size} | العدد: ${item.qty}</div>
                </div>
                <button class="ci-remove" onclick="removeCartItem('${item.cartId}')" aria-label="حذف المنتج">
                    <i class="fas fa-trash-alt"></i>
                </button>
            `;
            list.appendChild(itemDiv);
        });
    }

    if (subtotalEl) subtotalEl.textContent = subtotal.toLocaleString() + ' ر.س';
    if (grandTotalEl) grandTotalEl.textContent = subtotal.toLocaleString() + ' ر.س';
    if (submitBtn) submitBtn.disabled = false;
}

function removeCartItem(cartId) {
    shoppingCart = shoppingCart.filter(item => item.cartId !== cartId);
    updateCartUI();
    showToast('تم إزالة المنتَج من السلة');
}

function toggleCartDrawer(forceOpen = false) {
    const drawer = document.getElementById('cartDrawer');
    if (!drawer) return;
    if (forceOpen) {
        drawer.classList.add('active');
        drawer.setAttribute('aria-hidden', 'false');
    } else {
        drawer.classList.toggle('active');
        const isActive = drawer.classList.contains('active');
        drawer.setAttribute('aria-hidden', (!isActive).toString());
    }
}

// Guest Checkout Order via WhatsApp
function submitGuestOrder() {
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const district = document.getElementById('custDistrict').value.trim();
    const date = document.getElementById('custDate').value;
    const payment = document.getElementById('custPayment').value;

    if (!name || !phone || !district) {
        showToast('يرجى ملء كافة حقول المعلومات الأساسية (الاسم، الجوال، الحي)', 'error');
        return;
    }

    let itemsText = shoppingCart.map((item, idx) => 
        `🔹 *${idx + 1}. ${item.title}*\n   - النوع: ${item.periodText}\n   - المقاس: ${item.size}\n   - الكمية: ${item.qty}\n   - السعر: ${item.totalPrice.toLocaleString()} ر.س`
    ).join('\n\n');

    const total = shoppingCart.reduce((sum, item) => sum + item.totalPrice, 0);

    const message = `📋 *طلب جديد من الموقع الإلكتروني - مؤسسة همة* ⛺\n\n` +
        `👤 *بيانات العميل (Guest Checkout):*\n` +
        `• *الاسم:* ${name}\n` +
        `• *رقم الجوال:* ${phone}\n` +
        `• *الحي/المنطقة بجدة:* ${district}\n` +
        `• *تاريخ التركيب/الموعد:* ${date || 'فوري / أقرب موعد'}\n` +
        `• *طريقة الدفع المفضلة:* ${payment}\n\n` +
        `📦 *تفاصيل المنتجات والحجوزات:*\n${itemsText}\n\n` +
        `💰 *المجموع الإجمالي:* ${total.toLocaleString()} ر.س\n\n` +
        `📍 *الموقع:* حي طيبة - جدة\n` +
        `أرجو تأكيد الطلب وتحديد التوصيل.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/966538535898?text=${encoded}`, '_blank');
}

// Direct Modal WhatsApp Reservation Button
function directModalWhatsApp(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const modeSelect = document.getElementById('modalModeSelect');
    const rentalSelect = document.getElementById('rentalPeriodSelect');
    const sizeSelect = document.getElementById('modalSizeSelect');

    const mode = modeSelect ? modeSelect.value : (product.isRentalAvailable ? 'rent' : 'buy');
    const modeLabel = mode === 'rent' ? 'استئجار مؤقت' : 'شراء وتمليك';
    const size = sizeSelect ? sizeSelect.value : product.sizes[0];

    const message = `مرحباً مؤسسة همة 👋\nأرغب في حجز/طلب المنتج التالي:\n- *المنتج:* ${product.title}\n- *نوع الطلب:* ${modeLabel}\n- *المقاس:* ${size}\n- *الكمية:* ${currentModalQty}\n\nيرجى تزويدي بالتوفر وموعد التوصيل لمدينة جدة.`;

    window.open(`https://wa.me/966538535898?text=${encodeURIComponent(message)}`, '_blank');
}

// Interactive Cost Calculator Handler
function calculateCost() {
    const category = document.getElementById('calcCategory')?.value || 'tents';
    const serviceType = document.getElementById('calcServiceType')?.value || 'buy';
    const rentalDaysGroup = document.getElementById('rentalDaysGroup');
    const rentalDays = parseInt(document.getElementById('calcRentalDays')?.value || 1, 10);
    const area = parseInt(document.getElementById('calcArea')?.value || 30, 10);

    if (rentalDaysGroup) {
        rentalDaysGroup.style.display = serviceType === 'rent' ? 'block' : 'none';
    }

    let baseMeterRate = 450; // default for tents buy per sqm
    if (category === 'tents') baseMeterRate = serviceType === 'buy' ? 450 : 35;
    else if (category === 'sandwich') baseMeterRate = serviceType === 'buy' ? 350 : 30;
    else if (category === 'wood') baseMeterRate = serviceType === 'buy' ? 280 : 25;
    else if (category === 'screens') baseMeterRate = serviceType === 'buy' ? 120 : 15;
    else if (category === 'awnings') baseMeterRate = serviceType === 'buy' ? 190 : 20;

    let subtotal = baseMeterRate * area;

    if (serviceType === 'rent') {
        subtotal = subtotal * rentalDays;
    }

    // Options Addons
    if (document.getElementById('optInsulation')?.checked) subtotal += area * 40;
    if (document.getElementById('optLighting')?.checked) subtotal += 800;
    if (document.getElementById('optGlass')?.checked) subtotal += 3500;

    const totalEl = document.getElementById('totalCalcPrice');
    if (totalEl) totalEl.textContent = subtotal.toLocaleString() + ' ر.س';
}

function updateAreaValue(val) {
    const badge = document.getElementById('calcAreaVal');
    if (badge) badge.textContent = val + ' م²';
    calculateCost();
}

function sendCalcToWhatsApp() {
    const categoryText = document.getElementById('calcCategory').options[document.getElementById('calcCategory').selectedIndex].text;
    const serviceTypeText = document.getElementById('calcServiceType').options[document.getElementById('calcServiceType').selectedIndex].text;
    const area = document.getElementById('calcArea').value;
    const price = document.getElementById('totalCalcPrice').textContent;

    const message = `مرحباً مؤسسة همة 👋\nاستخدمت حاسبة التكلفة بموقعكم وأرغب في الحصول على عرض سعر رسمي:\n- *القسم:* ${categoryText}\n- *الخيار:* ${serviceTypeText}\n- *المساحة:* ${area} م²\n- *التكلفة التقديرية:* ${price}\n\nيرجى التواصل معي للتنفيذ بجدة.`;

    window.open(`https://wa.me/966538535898?text=${encodeURIComponent(message)}`, '_blank');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) navMenu.classList.toggle('active');
}

// Toast Notifications Helper
function showToast(msg, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="${type === 'error' ? 'fas fa-exclamation-circle text-gold' : 'fas fa-check-circle text-emerald'}"></i> <span>${msg}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3500);
}

// Setup Event Listeners
function setupEventListeners() {
    // Backdrop click close modal
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeProductModal();
        });
    }
}
