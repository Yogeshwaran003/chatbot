# chains.py
from transformers import pipeline

classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

def chat(prompt):
    labels = ["greeting", "goodbye", "job_opportunity",
    "skill_roadmap", "resume_help", "interview_prep","language_learning",
      "study_resources", "career_advice"]
    result = classifier(prompt, labels)
    return result["labels"][0]  # Top predicted intent


print("Chat function initialized with zero-shot classification model.")

# def chat(query):
#     """
#     Simulates a chat response for the given query.
#     This function can be replaced with actual chatbot logic.
#     """
#     llm = models.get_llm()
#     prompt_template = prompt.get_prompt_template()

#     chain= llm | prompt_template
#     # For now, we just return a simple response

#     response = chain.invoke(query)
#     return response.content
