import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDv_9XnQpKfqdLGV9KvjYHQnJiaeg5Zeew",
  authDomain: "my-cars-app-5a94e.firebaseapp.com",
  projectId: "my-cars-app-5a94e",
  storageBucket: "my-cars-app-5a94e.firebasestorage.app",
  messagingSenderId: "1041181863023",
  appId: "1:1041181863023:web:04a8947283fbba81b1319a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDv_9XnQpKfqdLGV9KvjYHQnJiaeg5Zeew",
  authDomain: "my-cars-app-5a94e.firebaseapp.com",
  projectId: "my-cars-app-5a94e",
  storageBucket: "my-cars-app-5a94e.firebasestorage.app",
  messagingSenderId: "1041181863023",
  appId: "1:1041181863023:web:04a8947283fbba81b1319a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDv_9XnQpKfqdLGV9KvjYHQnJiaeg5Zeew",
  authDomain: "my-cars-app-5a94e.firebaseapp.com",
  projectId: "my-cars-app-5a94e",
  storageBucket: "my-cars-app-5a94e.firebasestorage.app",
  messagingSenderId: "1041181863023",
  appId: "1:1041181863023:web:04a8947283fbba81b1319a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDv_9XnQpKfqdLGV9KvjYHQnJiaeg5Zeew",
  authDomain: "my-cars-app-5a94e.firebaseapp.com",
  projectId: "my-cars-app-5a94e",
  storageBucket: "my-cars-app-5a94e.firebasestorage.app",
  messagingSenderId: "1041181863023",
  appId: "1:1041181863023:web:04a8947283fbba81b1319a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
  const db = getFirestore(app);

  const carForm = document.getElementById('carForm');
  if (carForm) {
    carForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const carData = {
        model: document.getElementById('model').value,
        brand: document.getElementById('brand').value,
        year: document.getElementById('year').value,
        createdAt: new Date()
      };

      try {
        await addDoc(collection(db, "cars"), carData);
        alert("تم حفظ السيارة بنجاح!");
        window.location.href = "dashboard.html";
      } catch (e) {
        console.error("خطأ في الإضافة: ", e);
      }
    });
  }
</script>