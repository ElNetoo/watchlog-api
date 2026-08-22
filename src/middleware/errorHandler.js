export function errorHandler(err, req, res, next) {
  console.error(err.message);
  res.status(400).json({ erro: err.message });
}