echo "============================================"
echo "Dot product tests"
echo "============================================"
echo "C version"
gcc --version
gcc dot_product.c -o dot_product
./dot_product
echo
echo "============================================"
echo "Python version"
python3 --version
python3 dot_product.py
echo
echo "============================================"
echo "Python numpy version"
python3 --version
python3 dot_product_np.py
echo
echo "============================================"
echo "Node version"
node --version
node dot_product.js
echo
echo "============================================"
echo "Node array version"
node --version
node dot_product_ar.js
echo
