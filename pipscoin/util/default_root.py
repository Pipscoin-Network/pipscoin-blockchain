import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("PIPSCOIN_ROOT", "~/.pipscoin/mainnet"))).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("PIPSCOIN_KEYS_ROOT", "~/.pipscoin_keys"))).resolve()
