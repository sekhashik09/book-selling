
![Screenshot 2024-09-28 222809](https://github.com/user-attachments/assets/3006ea42-7e09-44ce-8685-0f6ebee54d6e)

This project is a simple QR Code Generator that allows users to generate a QR code from valid url text input, customize the QR code's color, and download it as a PDF of differnt size.

Features
   Generate QR code from text input.
   Customize the color of the QR code.
   Download the QR code as a PDF file of differnt size.
   Simple REST API implementation to handle
   
Technologies Used
Backend:
   Node.js: JavaScript runtime for the backend.
   Express.js: Web framework for Node.js to create server and API endpoints.
   QRCode: Library to generate QR codes.
   PDFKit: Library to generate PDF files.
   CORS: Middleware to enable Cross-Origin Resource Sharing.
   body-parser: Middleware for parsing incoming request bodies in JSON format.
   
   ![Screenshot 2024-09-28 225648](https://github.com/user-attachments/assets/20071bed-91b7-4048-ad77-dd1c6ec3c867)
   
   express-validation: for valid url 
   
Frontend:
  React: JavaScript library for building user interfaces.
  Axios: To send HTTP requests to the backend.
  Headless UI: To manage transitions for smooth animations.
  React Toastify: For notifications when generating the QR code.
  
Installation
  1. Clone the Repository:
      git clone https://github.com/sekhashik09/qr-gener.git
  2. Navigate to the Project Directory:
      cd qr-code-generator
  3. Install the Necessary Dependencies:
      npm install
  4. Create the PDFs Directory:
      The server will automatically create a pdfs directory where the generated PDF files will be stored. You can also create it manually if needed.
      mkdir pdfs
  5. file sturucture
       backend
     ![Screenshot 2024-09-28 225810](https://github.com/user-attachments/assets/1739a6b1-fa24-4337-89b5-35beed7fbc37)




     frontend
     ![Screenshot 2024-09-28 230819](https://github.com/user-attachments/assets/80e89ce9-8b76-458e-9076-a810fa8e17b7)


  7. Start the Server:
     node index.js
  By default, the server will run on port 4000. You can change this.

API 
   Generate QR Code as PDF
   URL: /generate-qr
   Method: POST
   Description:
      This endpoint generates a QR code from the provided text and allows users to download it as a PDF file.
 You can test your API on Postman
 
Request Body:
   text (string, required): The content to encode into the QR code.
   color, optional: Defaults black
Example Request:
   json
      {
         "text": "https://example.com",
         "color": "#FF0000"
      }
Example Response:
    If the request is successful, the response will  PDF download:

Content-Type: application/pdf
    The server responds with a downloadable PDF file containing the generated QR code.
Error Responses:
     400 Bad Request: If the text parameter is missing.
     json
        {
           "message": "Text is required"
        }
        ![Screenshot 2024-09-28 074410](https://github.com/user-attachments/assets/5d5b5a30-1fee-4689-a68a-ad36b92e8463)

Workflow
   Send a POST request to /generate-qr with the following body:
   {
      "text": "https://abc.com",
      "color": "#0000FF"
   }
Receive the PDF with the generated QR code for the provided text in blue color.
 ![Screenshot 2024-09-28 230459](https://github.com/user-attachments/assets/fee10334-80f2-4b5a-80dc-ae0a1c2594c0)


Download the file, which will be named qr_code_<timestamp>.pdf.
   ![Screenshot 2024-09-28 074938](https://github.com/user-attachments/assets/eb172143-aa5c-4139-bacf-4bdd15025f42)
   
Then open the pdf and see your otput

![Screenshot 2024-09-28 074901](https://github.com/user-attachments/assets/1660bc8d-e8a4-4a6d-8708-55aa398dad4a)

Frontend Setup
   1. Navigate to the Frontend Directory:
   cd frontend
2. Install Frontend Dependencies:
   npm install
3. Start the React App:
   npm run dev
This will run the app on http://localhost:5173.

4. Frontend Features:
   Real-time QR code preview based on user input.
   Color selection and size adjustment options for the QR code.
   Download QR code as a PDF file from the preview.
   Responsive design with Tailwind CSS.
   Smooth transitions for previewing the QR code using Headless UI
Dependencies for Backend
  express: Web framework for building API.
  body-parser: Middleware to parse incoming request bodies.
  qrcode: To generate the QR codes.
  pdfkit: For creating and writing PDF files.
  cors: Middleware to handle cross-origin requests.
  fs: Node.js file system module to handle file operations.
Run the Project
  To run the project, you can execute the following commands:
  npm install    # Install dependencies
  nodemon start  # Start the server
  The API will be accessible at http://localhost:4000.

Feel free to modify this README to suit your project's needs!

This version includes clear explanations of how to set up the backend and frontend, how to interact with the API, and how to customize the generated QR codes.









