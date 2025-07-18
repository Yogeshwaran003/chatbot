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

# Input and intent handler
user_input = st.chat_input("Type your message...")

if user_input:
    # Save user message
    st.session_state.messages.append({"role": "user", "content": user_input})

    # Intent detection from chains
    intent = chains.chat(user_input)

    # Display both user input and bot response
    reply = f"🗨️ You said: **{user_input}**\n\n🤖 Detected intent: **{intent}**"

    # Save bot message
    st.session_state.messages.append({"role": "assistant", "content": reply})
    st.chat_message("assistant").write(reply)
