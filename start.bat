echo.
echo.
 set /p email=Digite seu email: 
 set /p senha=Digite sua senha: 
 set /p codigo=Digite o codigo da sala:
 set /p nome=digite seu nome e turma:
 node index.js %email% %senha% %codigo% %nome%
