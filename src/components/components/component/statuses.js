import l10n from '../../../language'

const statuses = {
  operational: {
    name: "Operational",
    locName: l10n.components.operational,
    colour: "#247234",
    backgroundColour: "rgba(61, 167, 81, 0.1)",
  },
  performanceIssues: {
    name: "Performance Issues",
    locName: l10n.components.performanceIssues,
    colour: "#2f5888",
    backgroundColour: "rgba(73, 144, 226, 0.1)",
  },
  partialOutage: {
    name: "Partial Outage",
    locName: l10n.components.partialOutage,
    colour: "#74582a",
    backgroundColour: "rgba(255, 198, 103, 0.1)",
  },
  majorOutage: {
    name: "Major Outage",
    locName: l10n.components.majorOutage,
    colour: "#8e3b31",
    backgroundColour: "rgba(217, 68, 48, 0.1)",
  },
  maintenance: {
    name: "Maintenance",
    locName: l10n.components.maintenance,
    colour: "#717171",
    backgroundColour: "rgba(96, 96, 96, 0.1)",
  },
  unknown: {
    name: "Unknown",
    locName: l10n.components.unknown,
    colour: "#6e6b6b",
    backgroundColour: "rgba(177, 177, 177, 0.1)",
  },
};

export default statuses;
