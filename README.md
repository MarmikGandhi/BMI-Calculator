
# BMI Calculator

A sleek, animated, and user-friendly **BMI (Body Mass Index)** calculator built using HTML, CSS (Bootstrap), and JavaScript. Easily determine your BMI category — Underweight, Normal, or Overweight — with a modern UI and simple input form.

![BMI Calculator Banner](images.png)

---

## Features

- ✅ Real-time BMI calculation on button click
- ✅ Instant feedback with styled categories:
  - Underweight 
  - Normal 
  - Overweight 
- ✅ Smooth fade-in animation for result display
- ✅ Fully responsive card-style UI using Bootstrap 5
- ✅ Emoji-enhanced input design for better user experience

---

## Demo

Want to try it out? [Click here to open the live demo](https://bmi-calculator-marmik.netlify.app/)

---

## Project Structure

```
├── index.html     # Main HTML file (UI layout)
├── bmi.js         # JavaScript logic for BMI calculation
├── images.png     # Display image shown at the top
```

---

## Technologies Used

- HTML5  
- CSS3 (with Bootstrap 5)  
- JavaScript (ES6)

---

## How to Use

1. **Clone this repository:**

   ```bash
   git clone https://github.com/your-username/BMI-Calculator.git
   cd BMI-Calculator
   ```

2. **Open in Browser:**

   Open the `index.html` file in your preferred browser.

---

## How It Works

The **BMI (Body Mass Index)** is a value derived from an individual's height and weight, used to categorize health status.

### Calculation Formula

Since the user inputs height in **centimeters**, it is first converted to **meters** during the calculation. The JavaScript logic looks like this:

```javascript
let bmi = (weight / ((height * height) / 10000)).toFixed(2);
```

---

## Author

Developed by **Marmik Gandhi** Feel free to connect:   
- GitHub: [@MarmikGandhi](https://github.com/MarmikGandhi)
- Email: [marmikgandhi@gamil.com](mailto:marmikgandhi@gamil.com)
- LinkedIn: [marmik-gandhi](https://www.linkedin.com/in/marmik-gandhi/)
  
If you found this project helpful or interesting, feel free to the repo and follow me on GitHub!
