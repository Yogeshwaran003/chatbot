import models
import prompt
from transformers import pipeline

classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

candidate_intents = ["job_search", "resume_help", "roadmap_request", "greeting", "interview_tips", "general_question"]

user_input = " I need a roadmap to learn backend development"

result = classifier(user_input, candidate_intents)

print("Predicted Intent:", result["labels"][0])

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
