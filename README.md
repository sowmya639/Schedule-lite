# Schedule-lite

 Schedulo Lite – Smart Session Booking MVP

**Schedulo Lite** is a minimalist, web-based smart session booking application designed as a stripped-down version of scheduling tools like Calendly. Built using **Node.js and Express** on the backend and a simple static frontend with HTML, CSS, and JavaScript, this MVP showcases full-stack development, API handling, and clean UI/UX design.

The goal of this project is to create a real-time session booking platform where users can easily view, book, or cancel available time slots between **10:00 AM and 5:00 PM**. Each slot is displayed with its booking status—available or booked—with clear visual indicators: **green** for available and **red** for booked. A user-friendly form allows users to enter their name and reserve a slot. Once a slot is booked, it is blocked from further booking until canceled, ensuring no double-booking.

### 🔧 Key Features:

* **API Endpoints**:

  * `GET /api/slots` – View all time slots with their current status.
  * `POST /api/book` – Book a slot by sending the desired time and user name.
  * `POST /api/cancel` – Cancel a previously booked slot.
* **In-memory storage** is used to maintain slot status, eliminating the need for a database.
* A **responsive and clean UI** with intuitive interaction flow.
* **Visual cues** (color-coded slots) to improve user understanding.


