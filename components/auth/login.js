import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const { loginMutation } = useAuth();

  const onSubmit = (data) => {
    loginMutation.mutate({
      username: data.username,
      password: data.password
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} placeholder="Username" />
      <input {...register("password")} type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}