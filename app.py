import streamlit as st
import chains
# Title
st.set_page_config(page_title="Simple Chatbot", page_icon="🤖")
st.markdown("<h1 style='text-align: center;'>🤖 ChatBot Interface</h1>", unsafe_allow_html=True)

# Initialize session state for chat
if "messages" not in st.session_state:
    st.session_state.messages = []

# Display chat history
for msg in st.session_state.messages:
    role = msg["role"]
    content = msg["content"]
    if role == "user":
        st.chat_message("user").write(content)
    else:
        st.chat_message("assistant").write(content)

# User input
user_input = st.chat_input("Type your message...")

# Bot response simulation
def bot_response(user_text):
    # You can plug your chatbot logic or model here
    response = chains.chat(user_text)
    # return f"You said: '{user_text}'. I'm a bot, still learning!"
    return response
# Handle input
if user_input:
    # Save user message
    st.session_state.messages.append({"role": "user", "content": user_input})
    # Get bot reply
    reply = bot_response(user_input)
    st.session_state.messages.append({"role": "assistant", "content": reply})
    # Display bot reply
    st.chat_message("assistant").write(reply)
