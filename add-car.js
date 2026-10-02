alert('تم تحميل ملف JS بنجاح');
import { app } from '../js/firebase-config.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = '../dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = '../dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = '../dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = '../dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = '../dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = '../dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = '../dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = '../dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
const db = getFirestore(app);
document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = '../dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = '../dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = '../dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
,text:
},{line:30,text:
const db = getFirestore(app);
},{line:32,text:
document.getElementById('saveBtn').addEventListener('click', async (event) => {
},{line:34,text:
    const form = document.getElementById('addCarForm');
},{line:36,text:
        form.reportValidity();
},{line:38,text:
    }
},{line:40,text:
    try {
},{line:42,text:
            name: document.getElementById('carName').value,
},{line:44,text:
            status: document.getElementById('carStatus').value,
},{line:46,text:
            desc: document.getElementById('carDesc').value,
},{line:48,text:
        });
},{line:50,text:
        window.location.href = '../dashboard.html';
},{line:52,text:
        alert('حدث خطأ: ' + error.message);
},{line:54,text:
});
},{line:56,text:
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
},{line:58,text:
const db = getFirestore(app);
},{line:60,text:
document.getElementById('saveBtn').addEventListener('click', async (event) => {
},{line:62,text:
    const form = document.getElementById('addCarForm');
},{line:64,text:
        form.reportValidity();
},{line:66,text:
    }
},{line:68,text:
    try {
},{line:70,text:
            name: document.getElementById('carName').value,
},{line:72,text:
            status: document.getElementById('carStatus').value,
},{line:74,text:
            desc: document.getElementById('carDesc').value,
},{line:76,text:
        });
},{line:78,text:
        window.location.href = '../dashboard.html';
},{line:80,text:
        alert('حدث خطأ: ' + error.message);
},{line:82,text:
});
},{line:84,text:
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
},{line:86,text:
const db = getFirestore(app);
},{line:88,text:
document.getElementById('saveBtn').addEventListener('click', async (event) => {
},{line:90,text:
    const form = document.getElementById('addCarForm');
},{line:92,text:
        form.reportValidity();
},{line:94,text:
    }
},{line:96,text:
    try {
},{line:98,text:
            name: document.getElementById('carName').value,
},{line:100,text:
            status: document.getElementById('carStatus').value,
},{line:102,text:
            desc: document.getElementById('carDesc').value,
},{line:104,text:
        });
},{line:106,text:
        window.location.href = '../dashboard.html';
},{line:108,text:
        alert('حدث خطأ: ' + error.message);
},{line:110,text:
});
},{line:112,text:
import { firebaseConfig } from '../js/firebase-config.js';
},{line:114,text:
const app = initializeApp(firebaseConfig);
},{line:116,text:

},{line:118,text:
    event.preventDefault();
},{line:120,text:
    if (!form.checkValidity()) {
},{line:122,text:
        return;
},{line:124,text:

},{line:126,text:
        await addDoc(collection(db, "cars"), {
},{line:128,text:
            price: document.getElementById('carPrice').value,
},{line:130,text:
            image: document.getElementById('carImage').value,
},{line:132,text:
            createdAt: new Date()
},{line:134,text:
        alert('تم حفظ السيارة بنجاح!');
},{line:136,text:
    } catch (error) {
},{line:138,text:
    }
},{line:140,text:
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
},{line:142,text:
import { firebaseConfig } from '../js/firebase-config.js';
},{line:144,text:
const app = initializeApp(firebaseConfig);
},{line:146,text:

},{line:148,text:
    event.preventDefault();
},{line:150,text:
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = '../dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
import { firebaseConfig } from '../js/firebase-config.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = '../dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
const db = getFirestore(app);
document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = '../dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
    }
});
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
import { firebaseConfig } from '../js/firebase-config.js';
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = '../dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = '../dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});

import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { firebaseConfig } from '../js/firebase-config.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

alert('تم تحميل ملف add-car.js بنجاح');

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = '../dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
import { app } from '../js/firebase-config.js';

alert('تم تحميل ملف add-car.js بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = '../dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});

import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

const db = getFirestore(app);

alert('تم تحميل ملف JavaScript بنجاح');

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', () => {
    alert('تم تحميل ملف JavaScript بنجاح');
    
    const saveBtn = document.getElementById('saveBtn');
    if (saveBtn) {
        saveBtn.addEventListener('click', async (event) => {
            event.preventDefault();
            const form = document.getElementById('addCarForm');
            if (!form || !form.checkValidity()) {
                if (form) form.reportValidity();
                return;
            }

            try {
                await addDoc(collection(db, "cars"), {
                    name: document.getElementById('carName').value,
                    price: document.getElementById('carPrice').value,
                    status: document.getElementById('carStatus').value,
                    image: document.getElementById('carImage').value,
                    desc: document.getElementById('carDesc').value,
                    createdAt: new Date()
                });
                alert('تم حفظ السيارة بنجاح!');
                window.location.href = 'dashboard.html';
            } catch (error) {
                alert('حدث خطأ: ' + error.message);
            }
        });
    }
});

import { app } from '../js/firebase-config.js';

const db = getFirestore(app);

alert('تم تحميل ملف JavaScript بنجاح');

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from './js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});

import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from './js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from './js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from '../js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from './js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
    }
});
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from './js/firebase-config.js';

alert('1. تم تحميل ملف JavaScript بنجاح');

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { app } from '../js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});

import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async () => {
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async () => {
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { app } from './firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async () => {
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { app } from '../js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async () => {
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async () => {
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async () => {
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async () => {
    alert('2. تم الضغط على الزر');
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from './js/firebase-config.js';

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async () => {
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from "./firebase-config.js";

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async () => {
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from "./firebase-config.js";

const db = getFirestore(app);

document.getElementById('saveBtn').addEventListener('click', async () => {
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from './firebase-config.js'; // تأكد من مسار ملف الإعدادات
const db = getFirestore(app);
const carForm = document.getElementById('carForm');
carForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    const docRef = await addDoc(collection(db, "cars"), {
      brand: document.getElementById('brand').value,
      model: document.getElementById('model').value,
      year: document.getElementById('year').value,
      price: document.getElementById('price').value,
      status: document.getElementById('status').value
    });
    alert('تم حفظ السيارة بنجاح!');
    carForm.reset();
  } catch (error) {
    alert('حدث خطأ: ' + error.message);
  }
});
        alert('حدث خطأ: ' + error.message);
    }
});
import { app } from "./firebase-config.js";
const db = getFirestore(app);
const carForm = document.getElementById('carForm');
carForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const carData = {
            make: document.getElementById('make').value,
            model: document.getElementById('model').value,
            year: document.getElementById('year').value,
            price: document.getElementById('price').value,
            status: document.getElementById('status').value
        };
        await addDoc(collection(db, "cars"), carData);
        alert('تم حفظ السيارة بنجاح!');
        carForm.reset();
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
    alert('تم حفظ السيارة بنجاح!');
    document.getElementById('carForm').reset();
  } catch (error) {
    alert('حدث خطأ: ' + error.message);
  }
});
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
document.getElementById('saveBtn').addEventListener('click', async () => {
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.getElementById('saveBtn').addEventListener('click', async () => {
    const form = document.getElementById('addCarForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        await addDoc(collection(db, "cars"), {
            name: document.getElementById('carName').value,
            price: document.getElementById('carPrice').value,
            status: document.getElementById('carStatus').value,
            image: document.getElementById('carImage').value,
            desc: document.getElementById('carDesc').value,
            createdAt: new Date()
        });
        alert('تم حفظ السيارة بنجاح!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert('حدث خطأ: ' + error.message);
    }
});
