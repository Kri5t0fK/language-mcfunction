export const patterns = {
  newLine: "{{ln}}",
  boolean: "{{boolean}}",
  integer: "{{integer}}",
  nonNegativeInteger: "{{non_negative_integer}}",
  positiveInteger: "{{positive_integer}}",
  double: "{{double}}",
  scoreboardObjective: "{{scoreboard_objective}}",
  scoreHolder: {
    all: "{{score_holder.all}}",
    fakeplayer: "{{score_holder.fakeplayer}}"
  },
  position: {
    absoluteRelative: "{{position.abs_rel}}",
    local: "{{position.local}}"
  },
  blockPosition: {
    absoluteRelative: "{{block_position.abs_rel}}",
    local: "{{block_position.local}}"
  },
  range: {
    left: "{{range.left}}",
    right: "{{range.right}}"
  },
  intRange: {
    left: "{{int_range.left}}",
    right: "{{int_range.right}}"
  },
  rotation: "{{rotation}}",
  resourceID: "{{resource_id}}",
  resourceLocation: "{{resource_location}}",
  taggedResourceLocation: "{{tagged_resource_location}}",
  UUID: "{{uuid}}",
  playerName: "{{player_name}}",
  basicTargetSelector: "{{basic_target_selector}}",
  parameterizedTargetSelector: {
    begin: "{{parameterized_target_selector.begin}}",
    next: "{{parameterized_target_selector.next}}"
  },
  nbtCompound: {
    begin: "{{nbt_compound.begin}}",
    next: "{{nbt_compound.next}}"
  },
  nbtList: {
    begin: "{{nbt_list.begin}}",
    next: "{{nbt_list.next}}"
  },
  nbtPath: {
    begin: "{{nbt_path.begin}}",
    next: "{{nbt_path.next}}"
  },
  swizzle: "{{swizzle}}",
  entityAnchor: "{{entity_anchor}}"
};

export const captures = {
  boolean: "#boolean",
  integer: "#integer",
  nonNegativeInteger: "#non_negative_integer",
  positiveInteger: "#positive_integer",
  double: "#double",
  scoreboardObjective: "#scoreboard_objective",
  scoreHolder: {
    all: "#score_holder.all",
    fakeplayer: "#score_holder.fakeplayer"
  },
  position: {
    absoluteRelative: "#position.abs_rel",
    local: "#position.local"
  },
  // just use the same capture groups as for normal positions
  blockPosition: {
    absoluteRelative: "#position.abs_rel",
    local: "#position.local"
  },
  range: {
    left: "#range",
    right: "#range"
  },
  // same here
  intRange: {
    left: "#range",
    right: "#range"
  },
  rotation: "#rotation",
  resourceID: "#resource_id",
  resourceLocation: "#resource_location",
  taggedResourceLocation: "#tagged_resource_location",
  targetSelector: {
    base: "#target_selector.base",
    bracket: "#target_selector.bracket"
  },
  target: {
    UUID: "#target.uuid",
    playerName: "#target.player_name"
  },
  nbtCompound: {
    begin: "#nbt_compound.begin",
    next: "#nbt_compound.next"
  },
  nbtList: {
    begin: "#nbt_list.begin",
    next: "#nbt_list.next"
  },
  nbtPath: {
    begin: "#nbt_path.begin",
    next: "#nbt_path.next"
  },
  swizzle: "#swizzle",
  entityAnchor: "#entity_anchor"
};

export const nodes = {
  error: {
    invalidNode: "#error.invalid_node",
    unknownParser: "#error.unknown_parser",
    unmatchedChild: "#error.unmatched_child",
    badSyntax: "#error.bad_syntax"
  },
  common: {
    trailingWhitespace: "#common.trailing_whitespace",
    message: "#common.message"
  },
  textComponent: "#text_component",
  targetSelector: {
    content: "#target_selector.content"
  },
  nbtCompound: {
    content: "#nbt_compound.content"
  },
  nbtList: {
    content: "#nbt_list.content"
  },
  nbtPath: {
    content: "#nbt_path.content"
  }
};
