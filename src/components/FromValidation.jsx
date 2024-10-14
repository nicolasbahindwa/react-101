// import React from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Alert, AlertDescription, AlertTitle } from "./Alert";
// import "./UserRegistrationForm.css";

// // Define the schema for form validation
// const schema = z
//   .object({
//     username: z
//       .string()
//       .min(3, "Username must be at least 3 characters")
//       .max(20, "Username must not exceed 20 characters"),
//     email: z.string().email("Invalid email address"),
//     password: z
//       .string()
//       .min(8, "Password must be at least 8 characters")
//       .regex(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//         "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
//       ),
//     confirmPassword: z.string(),
//     age: z
//       .number()
//       .min(18, "You must be at least 18 years old")
//       .max(120, "Invalid age"),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords don't match",
//     path: ["confirmPassword"],
//   });

// const UserRegistrationForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//     reset,
//   } = useForm({
//     resolver: zodResolver(schema),
//     mode: "onBlur",
//   });

//   const onSubmit = async (data) => {
//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       console.log("Form submitted:", data);

//       // Simulate a server response (e.g., username already taken)
//       if (data.username === "admin") {
//         setError("username", {
//           type: "manual",
//           message: "This username is already taken",
//         });
//         return;
//       }

//       // If everything is successful, you might want to redirect or show a success message
//       alert("Registration successful!");
//       reset();
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       // Handle submission error (e.g., show an error message to the user)
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2 className="form-title">User Registration</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input {...register("username")} id="username" type="text" />
//           {errors.username && (
//             <Alert variant="destructive">
//               <AlertTitle>Error</AlertTitle>
//               <AlertDescription>{errors.username.message}</AlertDescription>
//             </Alert>
//           )}
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input {...register("email")} id="email" type="email" />
//           {errors.email && (
//             <Alert variant="destructive">
//               <AlertTitle>Error</AlertTitle>
//               <AlertDescription>{errors.email.message}</AlertDescription>
//             </Alert>
//           )}
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input {...register("password")} id="password" type="password" />
//           {errors.password && (
//             <Alert variant="destructive">
//               <AlertTitle>Error</AlertTitle>
//               <AlertDescription>{errors.password.message}</AlertDescription>
//             </Alert>
//           )}
//         </div>

//         <div className="form-group">
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             {...register("confirmPassword")}
//             id="confirmPassword"
//             type="password"
//           />
//           {errors.confirmPassword && (
//             <Alert variant="destructive">
//               <AlertTitle>Error</AlertTitle>
//               <AlertDescription>
//                 {errors.confirmPassword.message}
//               </AlertDescription>
//             </Alert>
//           )}
//         </div>

//         <div className="form-group">
//           <label htmlFor="age">Age</label>
//           <input
//             {...register("age", { valueAsNumber: true })}
//             id="age"
//             type="number"
//           />
//           {errors.age && (
//             <Alert variant="destructive">
//               <AlertTitle>Error</AlertTitle>
//               <AlertDescription>{errors.age.message}</AlertDescription>
//             </Alert>
//           )}
//         </div>

//         <button type="submit" className="submit-button">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UserRegistrationForm;



// UserRegistrationForm.js
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegistrationSchema } from "./../validation/validation";
import { Alert, AlertDescription, AlertTitle } from "./Alert";
import "./UserRegistrationForm.css";

const UserRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: zodResolver(userRegistrationSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);

      // Simulate a server response (e.g., username already taken)
      if (data.username === "admin") {
        setError("username", {
          type: "manual",
          message: "This username is already taken",
        });
        return;
      }

      alert("Registration successful!");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">User Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input {...register("username")} id="username" type="text" />
          {errors.username && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{errors.username.message}</AlertDescription>
            </Alert>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input {...register("email")} id="email" type="email" />
          {errors.email && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{errors.email.message}</AlertDescription>
            </Alert>
          )}
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input {...register("password")} id="password" type="password" />
          {errors.password && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{errors.password.message}</AlertDescription>
            </Alert>
          )}
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            {...register("confirmPassword")}
            id="confirmPassword"
            type="password"
          />
          {errors.confirmPassword && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {errors.confirmPassword.message}
              </AlertDescription>
            </Alert>
          )}
        </div>

        {/* Age */}
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="number"
          />
          {errors.age && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{errors.age.message}</AlertDescription>
            </Alert>
          )}
        </div>

        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default UserRegistrationForm;
