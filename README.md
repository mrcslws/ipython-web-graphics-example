# ipython-web-graphics-example

Build custom graphics for IPython using HTML, CSS, and JavaScript.

Download / clone this repo, then customize it.

## Try it as-is

If you want to install this built-in "foobar" library, do:

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

foobar.print_simple_d3_histogram([1, 2, 2, 3])

~~~

You can post your notebooks online, and they'll just work. Here's an example: [https://mrcslws.github.io/ipython-web-graphics-example/example.html](https://mrcslws.github.io/ipython-web-graphics-example/example.html).


## Customize it

Change all occurrences of "foobar" to your library name. Note that "foobar" appears in file/folder names and also inside of files.

Replace the `insertSimpleD3Histogram` function in `js/src/foobar.js` with your own JavaScript.

Replace the `print_simple_d3_histogram` function in `py/foobar/IPython_support.py` with your own functon that calls your JavaScript function.

Run `npm install` and install the python package.

Anyone who wants to generate these graphics themselves just needs to install your package. Put it on pypi and have them run `pip install foobar`, substituting your own package name.
