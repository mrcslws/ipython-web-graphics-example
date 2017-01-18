import platform
import sys

from setuptools import find_packages, setup

setup(name="foobar",
      version="0.0.1",
      description="",
      author="{YOUR NAME}",
      author_email="{YOUR EMAIL}",
      url="https://github.com/{USERNAME}/foobar",
      packages=find_packages(),
      package_data={'foobar': ['package_data/*',]},
      include_package_data=True,
)
