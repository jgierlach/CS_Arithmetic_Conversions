// main application components
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import AllConversions from './views/AllConversions.vue'
import Home from './views/Home.vue'

// Conversion components
import BinaryAddition from './views/conversions/BinaryAddition.vue'
import BinaryDecimal from './views/conversions/BinaryDecimal.vue'
import IEEE754 from './views/conversions/IEEE754.vue'
import OnesAndTwosComp from './views/conversions/OnesAndTwosComp.vue'
import HexadecimalConversions from './views/conversions/HexadecimalConversions.vue'

// Explanation components
import BinaryAdditionExplanation from './views/explanations/BinaryAdditionExplanation.vue'
import BinaryToDecimalExplanation from './views/explanations/BinaryToDecimalExplanation.vue'
import DecimalToBinaryExplanation from './views/explanations/DecimalToBinaryExplanation.vue'
import DecimalToHexExplanation from './views/explanations/DecimalToHexExplanation.vue'
import HexToDecimalExplanation from './views/explanations/HexToDecimalExplanation.vue'
import IEEE754Explanation from './views/explanations/IEEE754Explanation.vue'
import OnesCompExplanation from './views/explanations/OnesCompExplanation.vue'
import TwosCompExplanation from './views/explanations/TwosCompExplanation.vue'

// Practice components
import BinaryAdditionProblemList from './views/practice_problems/BinaryAdditionProblemList.vue'
import BinaryProblemList from './views/practice_problems/BinaryProblemList.vue'
import HexadecimalProblemList from './views/practice_problems/HexadecimalProblemList.vue'
import IEEE754ProblemList from './views/practice_problems/IEEE754ProblemList.vue'
import OnesAndTwosCompProblemList from './views/practice_problems/OnesTwosCompProblemList.vue'

export const routes = [
  // main component routes
  {path: '/', component: Home},
  {path: '/all-conversions', component: AllConversions},
  {path: '/about', component: About},
  {path: '/contact', component: Contact},

  // conversion component routes
  {path: '/binary-addition-conversion', component: BinaryAddition},
  {path: '/binary-decimal-conversion', component: BinaryDecimal},
  {path: '/ieee-754-conversion', component: IEEE754},
  {path: '/ones-and-twos-complement-conversion', component: OnesAndTwosComp},
  {path: '/hexadecimal-decimal-conversion', component: HexadecimalConversions},

  // explanation component routes
  {path: '/binary-addition-explanation', component: BinaryAdditionExplanation},
  {
    path: '/binary-to-decimal-explanation',
    component: BinaryToDecimalExplanation
  },
  {
    path: '/decimal-to-binary-explanation',
    component: DecimalToBinaryExplanation
  },
  {path: '/decimal-to-hex-explanation', component: DecimalToHexExplanation},
  {path: '/hex-to-decimal-explanation', component: HexToDecimalExplanation},
  {path: '/ieee754-explanation', component: IEEE754Explanation},
  {path: '/ones-complement-explanation', component: OnesCompExplanation},
  {path: '/twos-complement-explanation', component: TwosCompExplanation},

  // practice problems component routes
  {
    path: '/binary-addition-practice-problems',
    component: BinaryAdditionProblemList
  },
  {path: '/binary-practice-problems', component: BinaryProblemList},
  {
    path: '/hexadecimal-practice-problems',
    component: HexadecimalProblemList
  },
  {path: '/ieee-754-practice-problems', component: IEEE754ProblemList},
  {
    path: '/ones-and-twos-complement-practice-problems',
    component: OnesAndTwosCompProblemList
  },

  // default redirect to home page for any route that is not identified
  {path: '*', redirect: '/'}
]
