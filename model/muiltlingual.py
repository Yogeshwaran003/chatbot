from transformers import AutoTokenizer, AutoModelForSeq2SeqLM, pipeline

model_name = "facebook/nllb-200-distilled-600M"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

translator = pipeline("translation", model=model, tokenizer=tokenizer, src_lang="tam_Taml", tgt_lang="eng_Latn")

text = "நான் வேலை தேடுகிறேன்"  # "I'm looking for a job"
result = translator(text)
print("Translated:", result[0]['translation_text'])
