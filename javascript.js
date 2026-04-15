
const dateElements = document.querySelectorAll(".date");
const timeElements = document.querySelectorAll(".time");
const seatElements = document.querySelectorAll(".seat");

let selectedDate = null;
let selectedTime = null;
let seatCount = 0;
const ticketPrice = 500; 


function updateTotalPrice() {
    if (selectedDate && selectedTime && seatCount > 0) {
        const totalAmount = seatCount * ticketPrice;
        document.querySelector(".amount").textContent = totalAmount;
    }
}


dateElements.forEach(date => {
    date.addEventListener("click", () => {
       
        dateElements.forEach(d => d.classList.remove("selected"));
       
        date.classList.add("selected");
        selectedDate = date.textContent;
        updateTotalPrice();
       
    });
});


timeElements.forEach(time => {
    time.addEventListener("click", () => {
       
        timeElements.forEach(t => t.classList.remove("selected"));
        
        time.classList.add("selected");
        selectedTime = time.textContent;
        updateTotalPrice();
    });
});


seatElements.forEach(seat => {
    seat.addEventListener("change", () => {
    
        seatCount = Array.from(seatElements).filter(s => s.checked).length;
        updateTotalPrice();
        document.querySelector(".count").innerHTML = seatCount
    });
});


function getRandomBookedSeats() {
    const bookedSeats = new Set();
    while (bookedSeats.size < 6) {
        const randomSeat = Math.floor(Math.random() * 80) + 1;
        bookedSeats.add(randomSeat);
    }
    return Array.from(bookedSeats);
}


function markBookedSeats() {
    const bookedSeatNumbers = getRandomBookedSeats();
    bookedSeatNumbers.forEach(seatNum => {
        const seatLabel = document.querySelector(`#seat${seatNum} + .seat-label`);
        if (seatLabel) {
            seatLabel.classList.add("booked");
            seatLabel.style.backgroundColor = "#d9534f"; 
            seatLabel.style.pointerEvents = "none"
        }
    });
}

markBookedSeats();
