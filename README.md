# 📱 Medical Assistant - A React Native Expo App

A mobile application built using React Native and Expo.

---

## 🚀 Setup Instructions


```
git clone <your-repo-url>
cd medical-assistant
yarn
yarn run start
```

---

## 🧱 Tech Stack


- React Native  
- Expo  
- No State Management used but if necessary could use:
  - Zustand
  - ReduxToolkit
  - Context
- No Navigation used since only 1 screen but if needed could use
  - React Navigation
  - Expo Navigation
- Tamagui
- Lottie, Reanimated, React Native Bottom Sheet, Expo Haptics, React Hook Form

---

## 🛠️ Implementation Approach

- Simple and straight to the point
- Used an AI tool that generates Basic UI Designs
- Generated a concept for the criteria needed
- Upon Submitting the Bottom sheet opens with mock AI Suggestions

---

## 🎨 Design Decisions

1. As requested a Slider was used from Tamagui to let the user select the sleep duration
2. I implemented a Toggle like behaviour component that chooses between one moood
3. Since the success Animation was better to be a Lottie file I implemented animation in a different aspect to highlight my animation creation capability.
4. The AI suggestions are staggered using the Reanimated library as well as the go back button
5. Regarding component reuse i was able to create a reusable Card component that wraps the mood, sleep and notes sections. I also created a reusable Ai Suggestion card accepts an icon name, tint color and bg shade.


---

## 🧩 Areas for Improvement


- I would improve **Theming and reusable components** by **having a consistent theme across the app and screens**, which would help with **better User Experience**.
- I would improve **the overall app UI Design** by **having a real UI Design from a professional**, which would help with **better User Experience**.
- I would improve **keyboard avoiding view** by **having a more consistent behaviour across different OSs**, which would help with **better performance**.



---

## 📸 Screenshots


<div style="display: flex; gap: 10px;">
  <img src="https://github.com/user-attachments/assets/b64482b1-7063-4d4d-92e7-f357f073dbdf" alt="Screenshot 1" style="width: 400px; height: auto;"/>
  <img src="https://github.com/user-attachments/assets/843c14ed-bbc0-4ac1-8459-ed8eb8f5232c" alt="Screenshot 2" style="width: 400px; height: auto;"/>
  <img src="https://github.com/user-attachments/assets/25ddfdf3-a83d-4a81-a704-3157bedb0084" alt="Screenshot 3" style="width: 400px; height: auto;" />
</div>



---


## 📄 License


This project is licensed under the [MIT License](LICENSE).
