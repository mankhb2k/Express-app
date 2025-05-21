import bcrypt from 'bcrypt'
import * as userService from './user.service.js';

// Đăng ký tài khoản mới
export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ error: 'Username and password required' });

    // Kiểm tra username đã tồn tại chưa
    const existing = await userService.findUserByUsername(username);
    if (existing)
      return res.status(409).json({ error: 'Username already exists' });

    // Băm mật khẩu
    const hash = await bcrypt.hash(password, 10);

    // Lưu user vào DB
    const newUser = await userService.createUser({ username, password: hash });

    res.status(201).json({ message: 'Register success', user: { id: newUser.id, username: newUser.username } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Đăng nhập
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ error: 'Username and password required' });

    // Tìm user theo username
    const user = await userService.findUserByUsername(username);
    if (!user)
      return res.status(401).json({ error: 'Invalid username or password' });

    // So sánh mật khẩu
    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(401).json({ error: 'Invalid username or password' });

    res.json({ message: 'Login success', user: { id: user.id, username: user.username } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
