export const profile = {
  name: 'Dr. Amir Rahnama',
  role: 'AI & Machine Learning Engineer | Generative AI & Agentic AI',
  business: 'Rahnama AI Scientific Consulting',
  email: 'arahnamab@gmail.com',
  about:
    Senior AI and Machine Learning Engineer with a Ph.D. in Mathematics, an M.Sc. in Computer Science, and over 8 years of applied experience in financial services, government, and research. Specialized in Python, predictive modeling, NLP, Generative AI, RAG, and Agentic AI. Experienced in developing and evaluating machine learning solutions, building reproducible workflows, and integrating AI capabilities into practical applications.
  skills: [
    'Machine Learning',
    'Generative AI',
    'Retrieval-Augmented Generation (RAG)',
    'Natural Language Processing (NLP)',
    'Python',
    'Production AI Systems',
    'Data Science',
  ],
  projectAreas: [
   
{
  sector: 'Financial Services',
  summary: 'EY / BMO: Developed and evaluated mortgage and HELOC credit-risk prediction models using Python, SQL, logistic regression, random forests, and XGBoost. Applied feature engineering, model validation, and performance evaluation using AUC, F1-score, and recall.'
},
{
  sector: 'Government',
  summary: 'Justice Canada: Developed NLP workflows for legal document classification, semantic search, and information extraction. Transport Canada: Built scalable product classification pipelines using Python, SQL, Spark/PySpark, and machine learning.'
},
{
  sector: 'Generative AI & Agentic AI',
  summary: 'Designed and evaluated LLM and RAG workflows using Python, LangChain, LangGraph, and FAISS. Worked with document chunking, embeddings, retrieval, prompt design, model evaluation, and hallucination mitigation.'
}

  ],
  education: [
    { degree: 'Ph.D.', field: 'Mathematics' },
    { degree: 'M.Sc.', field: 'Computer Science' },
  ],
} as const
