import models
import prompt


def chat(query):
    """
    Simulates a chat response for the given query.
    This function can be replaced with actual chatbot logic.
    """
    llm = models.get_llm()
    prompt_template = prompt.get_prompt_template()

    chain= llm | prompt_template
    # For now, we just return a simple response

    response = chain.invoke(query)
    return response.content
