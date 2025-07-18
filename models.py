def get_llm():
    """
    Returns a simulated language model.
    This function can be replaced with actual model initialization logic.
    """
    class MockLLM:
        def __call__(self, query):
            return f"Simulated response for: {query}"

    return MockLLM()

