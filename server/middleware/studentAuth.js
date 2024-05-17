import jwt from 'jsonwebtoken'
import studentModel from '../model/studentModel.js';
export const verifyStudent = async (req, res, next) => {
  const token = req.cookies['student jwt'];
    if (token) {
      try {
        const verifyJwt = jwt.verify(token,process.env.JWT_SECRET_KEY_STUDENT);
        const studentID = verifyJwt.id;
        const student = await studentModel.findOne({ _id:studentID });
        
        if (student.ban) {
          res.json({ logged: false, err: true, message: 'student banned', ban: true });
        } else {
          req.student = student; 
          next();
        }
      } catch (error) {
        res.json({ logged: false, err: true, message: 'Invalid token', ban: false });
      }
    } else {
      res.json({ logged: false, err: true, message: 'No token', ban: false });
    }
  };
  