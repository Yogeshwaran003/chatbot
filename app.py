import streamlit as st
import chains

# Page setup
st.set_page_config(page_title="Simple Chatbot", page_icon="🤖")
st.markdown("<h1 style='text-align: center;'>🤖 ChatBot Interface</h1>", unsafe_allow_html=True)

# Session setup
if "messages" not in st.session_state:
    st.session_state.messages = []

# Display previous messages
for msg in st.session_state.messages:
    role = msg["role"]
    content = msg["content"]
    st.chat_message(role).write(content)
# Function to check intent and return appropriate response
def check_intent(prompt):
    match prompt:
        case "greeting":
            return "Hello! How can I assist you today?"
        case "goodbye":
            return "Goodbye! Have a great day!"
        case "job_opportunity":
            return "Are you looking for job opportunities? I can help with that."
        case "skill_roadmap":
            return "I can provide a skill roadmap for your career path."
        case "resume_help":
            return "Need help with your resume? Let's work on it together."
        case "interview_prep":
            return "I can help you prepare for interviews."
        case "language_change":
            return "Would you like to change the language of our conversation?"
        case "study_resources":
            return "I can suggest study resources for your learning."
        case "career_advice":
            return "Looking for career advice? I'm here to help."
        case _:
            return "I'm not sure how to respond to that. Can you please clarify?"

# Input and intent handler
user_input = st.chat_input("Type your message...")



if user_input:
    # Save user message
    st.session_state.messages.append({"role": "user", "content": user_input})

    # Intent detection from chains
    intent = chains.chat(user_input)

    # Display both user input and bot response
    reply = f"🗨️ You said: **{user_input}**\n\n🤖 "
    # reply += check_intent(intent)
    reply += f"Intent detected: **{intent}**\n\n"
    # Save bot message
    st.session_state.messages.append({"role": "assistant", "content": reply})
    st.chat_message("assistant").write(reply)

