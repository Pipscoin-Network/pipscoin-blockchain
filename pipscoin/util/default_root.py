import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("PIPSCOIN_ROOT", "~/.pipscoin/mainnet"))).resolve()
STANDALONE_ROOT_PATH = Path(
    os.path.expanduser(os.getenv("PIPSCOIN_STANDALONE_WALLET_ROOT", "~/.pipscoin/standalone_wallet"))
).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("PIPSCOIN_KEYS_ROOT", "~/.pipscoin_keys"))).resolve()
