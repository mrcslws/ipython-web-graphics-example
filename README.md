# ipython-web-graphics-example

Build custom graphics for IPython using HTML, CSS, and JavaScript.

Download / clone this repo, then customize it.

~~~
npm install

cd py/
python setup.py develop --user
~~~

Now, in a Jupyter notebook, include:

~~~python
import foobar.IPython_support as foobar

# Include this once at the top of the notebook.
foobar.init_notebook_mode()
~~~

And you're done!

~~~python

foobar.insertDiagram()

~~~


You can post your notebooks online, and they'll just work. Here's an example: [https://mrcslws.github.io/ipython-web-graphics-example/example.html](https://mrcslws.github.io/ipython-web-graphics-example/example.html).

Anyone who wants to generate this graphics themselves just needs to install your foobar package. Put it on pypi and have them run `pip install foobar`, substituting your own package name.
