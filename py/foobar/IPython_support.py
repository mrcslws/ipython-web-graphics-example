import json
import numbers
import os
import uuid

from pkg_resources import resource_string

from IPython.display import HTML, display


def get_foobar_js():
    path = os.path.join('package_data', 'foobar-bundle.js')
    foobar_js = resource_string('foobar', path).decode('utf-8')
    return foobar_js


def init_notebook_mode():
    # Insert your own CSS here.
    style_inject = """
    <style>
    .bar rect {
      fill: steelblue;
    }

    .bar text {
      fill: #fff;
      font: 10px sans-serif;
    }

    div.foobar-output svg {
      max-width: initial;
    }

    </style>
    """

    script_inject = u"""
    <script type='text/javascript'>
      if(!window.foobar) {{
        define('foobar', function(require, exports, module) {{
          {script}
        }});
        require(['foobar'], function(foobar) {{
          window.foobar = foobar;
        }});
      }}
    </script>
    """.format(script=get_foobar_js())

    display(HTML(style_inject + script_inject))


def print_simple_d3_histogram(number_list):
    numberListJson = json.dumps(number_list)

    elementId = str(uuid.uuid1())
    addChart = """
    <div class="foobar-output" id="%s"></div>
    <script>
    require(['foobar'], function(foobar) {
      foobar.insertSimpleD3Histogram(document.getElementById('%s'), '%s');
    });
    </script>
    """ % (elementId, elementId, numberListJson)

    display(HTML(addChart))
