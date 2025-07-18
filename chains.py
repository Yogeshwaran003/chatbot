# chains.py
from transformers import pipeline

classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")
# classifier = pipeline("text-classification", model="Falconsai/intent_classification")

def chat(prompt):
    labels = ["greeting", "goodbye", "job_opportunity",
    "skill_roadmap", "resume_help", "interview_prep","language_change",
      "study_resources", "career_advice"]
    result = classifier(prompt, labels)
    return result["labels"][0]  # Top predicted intent

#################################################################################################################

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


# from transformers import pipeline

# classifier = pipeline("text-classification", model="Falconsai/intent_classification")

# def chat(prompt):
#     result = classifier(prompt)
#     return result[0]["label"]
