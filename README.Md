# codesaga
AI-powered code review platform unless like the normal pr-review style its more effective in bugs,analyzes,format used based on this user will get a score and also improvement points so the  developers can easily know that were they are actually lagging 
# Folder structure 


# problems
 most of the developers are unable to review there code how effective there code 
 in hiring process also recruiters can you use consider this as a factors to  there candidate assignments

basically our platform review the codebase so its checks the bugs,security,performances of the code based on that user get the improvements points and score so the user can understand how effective he written his code 

##  Features
- PR-style AI code reviews
- Bug, performance, security & best-practice analysis
- Line-level feedback with suggestions
- Code quality scoring system
- GitHub-like review experience
- Review history tracking

## Tech Stack

Frontend
- React
- Tailwind CSS
- Monaco Editor

Backend
- Node.js
- Express
- MongoDB

AI
- OpenAI / OpenRouter
- Prompt Engineering

Auth & Infra
- Google+JWT Authentication
- Vercel (Frontend)
- Render (Backend)

##  How AI Review Works

1. User submits code(.js,.py,cpp..etc )( ZIP File) or repository url
2. Backend detects language and structure
3. A structured prompt is generated instructing the AI to act as a senior reviewer
4. AI analyzes:
   - Bugs
   - Performance
   - Security
   - Best Practices
5. Response is parsed into PR-style comments with scores

## How responses looks like 

 Issue: Missing input validation  
 File: authController.js (line 34)  
 Suggestion:
Add schema validation to prevent malformed requests.
